<template>
  <footer class="md:hidden fixed bottom-0 bg-white flex flex-shrink w-full">
    <NavBar @open-search-modal="openSearchModal"/>
  </footer>
</template>

<script lang="ts" setup>
import NavBar from './NavBar.vue';
const emit = defineEmits(['open-search-modal']);

const openSearchModal = () => {
  emit('open-search-modal');
};
</script>
