<template>
  <div v-if="showModal" class="fixed inset-0 z-50 pt-14 px-4 md:px-20">
    <div class="absolute inset-0 bg-black opacity-50" @click="closeModal"></div>
    <div class="relative z-50">
      <div class="bg-white shadow-lg">
        <div class="p-4">
          <input
            type="text"
            class="w-full p-2 border-b"
            placeholder="Rechercher un Pokémon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showModal = ref(true);
const closeModal = (e: MouseEvent) => {
  showModal.value = !showModal.value;
};
</script>