<template>
  <header class="hidden md:flex flex-shrink justify-between p-4 w-full border-b">
    <div>
      <NuxtLink to="/">
        Pokedex
      </NuxtLink>
    </div>
    <div class="space-x-5">
      <NuxtLink to="/">
        Accueil
      </NuxtLink>
      <button @click="openSearchModal">
        Rechercher un Pokémon
      </button>
      <NuxtLink to="/profile">
        Romzor
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits(['open-search-modal']);

const openSearchModal = () => {
  emit('open-search-modal');
};
</script>