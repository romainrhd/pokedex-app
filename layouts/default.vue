<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader @open-search-modal="toggleModal"/>
    <main class="flex flex-col flex-grow md:container md:mx-auto mt-4">
      <ModalSearch v-if="showModal" @close-search-modal="toggleModal"/>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>