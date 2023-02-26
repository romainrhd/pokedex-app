<template>
  <div class="flex flex-col items-center justify-center space-y-2 w-full">
    <input
        type="email"
        class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        placeholder="Email"
    />
    <input
        type="password"
        class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        placeholder="Mot de passe"
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

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>