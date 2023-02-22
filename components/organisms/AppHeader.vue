<template>
  <header class="flex flex-shrink justify-between p-4 w-full border-b">
    <button class="cursor-pointer">
      <Icon name="heroicons:arrow-left"/>
    </button>
    <span>Pokedex</span>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits(['open-search-modal']);

const openSearchModal = () => {
  emit('open-search-modal');
};
</script>