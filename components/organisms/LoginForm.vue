<template>
  <div class="flex flex-col items-center justify-center space-y-2">
    <IconPokeball class="w-20 h-20" />
    <h1 class="text-3xl font-bold">Se connecter</h1>
  </div>
  <div class="flex flex-col items-center justify-center space-y-2 w-full md:w-1/2">
    <Input type="email" placeholder="Email" v-model="email" />
    <Input type="password" placeholder="Mot de passe" v-model="password" />
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
import Input from "~/components/atoms/Input.vue";
import { useAuthStore } from "~/stores/AuthStore";

const email: Ref<string> = ref("");
const password: Ref<string> = ref("");

const authStore = useAuthStore();
const { login } = authStore;
const handleLogin = async () => {
  try {
    await login(email.value, password.value);
  } catch (error) {
    console.error(error);
  }
  navigateTo("/");
};
</script>