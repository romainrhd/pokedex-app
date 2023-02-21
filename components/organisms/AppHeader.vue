<template>
  <header class="flex flex-shrink justify-between p-4 w-full border-b">
    <span>Pokedex</span>
    <span class="cursor-pointer">
      <Icon name="heroicons:magnifying-glass" @click="openSearchModal"/>
    </span>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits(['open-search-modal']);

const openSearchModal = () => {
  emit('open-search-modal');
};
</script>