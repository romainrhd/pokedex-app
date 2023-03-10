import {defineStore} from "pinia";
import {computed} from "#imports";
import {ComputedRef, Ref} from "vue";

export const useAuthStore = defineStore('auth', () => {
  const jwt: Ref<string> =ref('');

  const login: (email, password) => Promise<void> = async (email, password) => {
    const jwtRequest = await fetch('http://localhost:3333/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const jwtResponse = await jwtRequest.json();
    jwt.value = jwtResponse.token;
    localStorage.setItem('jwt', jwt.value);
  };

  const logout: () => void = () => {
    jwt.value = '';
    localStorage.removeItem('jwt');
  };

  const isAuthenticated: ComputedRef<boolean> = computed(() => {
    if (process.browser) {
      if (localStorage.getItem('jwt') !== '') {
        jwt.value = localStorage.getItem('jwt');
        return true;
      } else {
        return false;
      }
    }
  })

  return { jwt, login, logout, isAuthenticated };
})