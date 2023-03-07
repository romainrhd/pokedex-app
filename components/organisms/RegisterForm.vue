<template>
  <div class="flex flex-col items-center justify-center space-y-2">
    <IconPokeball class="w-20 h-20" />
    <h1 class="text-3xl font-bold">S'inscrire</h1>
  </div>
  <div class="flex flex-col items-center justify-center space-y-2 w-full md:w-1/2">
    <Input type="text" placeholder="Prénom" />
    <Input type="text" placeholder="Nom" />
    <Input type="email" placeholder="Email" />
    <Input type="password" placeholder="Mot de passe" />
    <Input type="password" placeholder="Confirmation de Mot de passe" />
  </div>
  <div class="flex flex-col items-center justify-center space-y-2">
    <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      S'inscrire
    </button>
    <NuxtLink to="/login" class="text-blue-500 hover:text-blue-700">
      J'ai déjà un compte
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
import Input from "~/components/atoms/Input.vue";
</script>