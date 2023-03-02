<template>
  <div class="flex flex-col items-center justify-center space-y-2">
    <IconPokeball class="w-20 h-20" />
    <h1 class="text-3xl font-bold">Se connecter</h1>
  </div>
  <div class="flex flex-col items-center justify-center space-y-2 w-full md:w-1/2">
    <input
        type="email"
        class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        placeholder="Email"
        v-model="email"
    />
    <input
        type="password"
        class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        placeholder="Mot de passe"
        v-model="password"
    />
  </div>
  <div class="flex flex-col items-center justify-center space-y-2">
    <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="handleLogin"
    >
      Se connecter
    </button>
    <NuxtLink to="/register" class="text-blue-500 hover:text-blue-700">
      Je n'ai pas encore de compte
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { Ref } from "vue";
import { useAuthStore } from "~/stores/AuthStore";
import {Store} from "pinia";

const email: Ref<string> = ref("");
const password: Ref<string> = ref("");

const authStore: Store  = useAuthStore();
const { login } = authStore;
const handleLogin = async () => {
  await login(email.value, password.value);
  navigateTo("/");
};
</script>