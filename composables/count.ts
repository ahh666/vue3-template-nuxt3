/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-12 16:54:05
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-17 16:17:11
 * @FilePath     : \vue3-template-nuxt3\composables\count.ts
 * @Description  : Description
 */
export function useCount() {
  const count = useState('count', () => Math.round(Math.random() * 20))

  function inc() {
    count.value += 1
  }
  function dec() {
    count.value -= 1
  }

  return {
    count,
    inc,
    dec,
  }
}
