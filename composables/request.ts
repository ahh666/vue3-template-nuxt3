/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-10 18:00:05
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-05-10 17:58:29
 * @FilePath     : \vue3-template-nuxt3\composables\request.ts
 * @Description  : Description
 */

import type { UseFetchOptions } from 'nuxt/app'
import { Message } from 'tdesign-vue-next'
import { RequestCodeEnum } from '~/constants/enums'

interface DefaultResult<T = any> {
  code: number
  data: T
  msg: string
  success: boolean
}

type UrlType = string | Request | Ref<string | Request> | (() => string | Request)

type HttpOption<T> = UseFetchOptions<DefaultResult<T>>

// ignoreCatch: true, // 不走统一拦截，一个法外之地的接口
// ignoreGlobalErrorMessage: true, // 报错不提示
interface RequestConfig<T = any> extends HttpOption<T> {
  // 忽略拦截，不走拦截，拥有 responseData，且 code !== 0 的情况下，直接返回 responseData，
  // 但是若无 responseData， 不设置 ignoreGlobalErrorMessage 也会报错
  ignoreCatch?: boolean

  // 忽略全局错误提示，走拦截，但是任何情况下都不会提示错误信息
  ignoreGlobalErrorMessage?: boolean
}

async function requestHandler<T>(url: UrlType, params: any, options: RequestConfig<T>): Promise<DefaultResult<T> | T> {
  // 请求头配置
  const headers = {
  }

  const method = ((options?.method || 'GET') as string).toUpperCase()

  const runtimeConfig = useRuntimeConfig()
  const { baseUrl } = runtimeConfig.public

  const baseURL = `${baseUrl}/api/`

  // 处理用户信息过期
  const hanlerTokenOverdue = async () => {
    // TODO
  }

  // 处理报错异常
  const handlerError = (msg = '服务异常') => {
    if (import.meta.server)
      showError({ message: msg, statusCode: 500 })
    else
      Message.error(msg)
  }

  const { data, error } = await useFetch(url, {
    baseURL,
    headers,
    onRequest({ request, options }) {
      // 请求拦截
    },
    onResponse() {
      //
    },
    // credentials: 'include',
    params: method === 'GET' ? params : undefined,
    body: method === 'POST' ? JSON.stringify(params) : undefined,
    ...options,
  })

  // eslint-disable-next-line no-console
  console.log(url, data.value)

  const responseData = data.value as DefaultResult<T>
  const { ignoreCatch, ignoreGlobalErrorMessage } = options // 忽略全局

  if (error.value || !responseData) {
    if (!ignoreGlobalErrorMessage)
      handlerError()
    return Promise.reject(error.value || '服务响应失败，请稍后重试')
  }
  else {
    const { code, data: result, msg } = responseData
    // 接口请求成功，直接返回结果
    if (code === RequestCodeEnum.SUCCESS || !code)
      return result

    if (!ignoreCatch) {
      // 接口请求错误，统一处理
      switch (code) {
        case RequestCodeEnum.TOKEN_OVERDUE: // 登录信息过期，去登录
          // 用户信息过期
          await hanlerTokenOverdue()
          break
        default:
          if (!ignoreGlobalErrorMessage)
            handlerError(msg)
          return Promise.reject(msg || '服务响应失败，请稍后重试')
      }
    }
  }

  return responseData
}

// 导出使用
export const request = {
  ssrget: <T>(url: UrlType, params?: any, option?: RequestConfig<T>) => {
    return requestHandler<T>(url, params, { method: 'get', ...option })
  },
  ssrpost: <T>(url: UrlType, params?: any, option?: RequestConfig<T>) => {
    return requestHandler<T>(url, params, { method: 'post', ...option })
  },
  get: <T>(url: UrlType, params?: any, option?: RequestConfig<T>) => {
    return requestHandler<T>(url, params, { method: 'get', ...option, server: false })
  },
  post: <T>(url: UrlType, params?: any, option?: RequestConfig<T>) => {
    return requestHandler<T>(url, params, { method: 'post', ...option, server: false })
  },
}
