<template>
  <div class="flex flex-col items-center justify-center space-y-2 w-full">
    <input
        type="text"
        class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        placeholder="Prénom"
    />
    <input
        type="text"
        class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        placeholder="Nom"
    />
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
    <input
        type="password"
        class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        placeholder="Confirmation de Mot de passe"
    />
  </div>
  <div class="flex flex-col items-center justify-center space-y-2">
    <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="handleLogin"
    >
      S'inscrire
    </button>
    <NuxtLink to="/login" class="text-blue-500 hover:text-blue-700">
      J'ai déjà un compte
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>