<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader @open-search-modal="toggleModal"/>
    <main class="flex flex-col flex-grow container mx-auto mt-4">
      <ModalSearch v-if="showModal" @close-search-modal="toggleModal"/>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import AppFooter from '~~/components/organisms/AppFooter.vue';
import AppHeader from '~~/components/organisms/AppHeader.vue';
import ModalSearch from '~~/components/organisms/ModalSearch.vue';

const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>