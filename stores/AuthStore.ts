import {defineStore} from "pinia";

export const useAuthStore = defineStore('auth', () => {
  const jwt =ref('');

  const login = () => {
    console.log('AuthStore: login()')
  }

  return { jwt, login }
})