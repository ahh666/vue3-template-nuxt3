/*
 * @Author       : Archer<ahh666@qq.com>
 * @Date         : 2024-04-12 16:54:05
 * @LastEditors  : Archer<ahh666@qq.com>
 * @LastEditTime : 2024-04-18 15:40:38
 * @FilePath     : \vue3-template-nuxt3\composables\user.ts
 * @Description  : Description
 */
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  /**
   * Current named of the user.
   */
  const savedName = ref('')
  const previousNames = ref(new Set<string>())

  const usedNames = computed(() => Array.from(previousNames.value))
  const otherNames = computed(() => usedNames.value.filter(name => name !== savedName.value))

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function setNewName(name: string) {
    if (savedName.value)
      previousNames.value.add(savedName.value)

    savedName.value = name
  }

  return {
    setNewName,
    otherNames,
    savedName,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
