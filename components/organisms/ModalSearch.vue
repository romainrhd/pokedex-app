<template>
  <div class="fixed inset-0 z-50 pt-14 px-4 md:px-20">
    <div class="absolute inset-0 bg-black opacity-50" @click="closeModal"></div>
    <div class="relative z-50">
      <div class="bg-white shadow-lg p-4">
        <input
            type="text"
            class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            placeholder="Rechercher un Pokémon"
        />
        <div class="grid grid-cols divide-y h-96 overflow-auto">
          <div class="flex w-full items-center cursor-pointer hover:bg-gray-200">
            <div class="basis-1/3">
              <img src="https://www.pokepedia.fr/images/3/3f/Sprite_0001_HOME.png" alt="Bulbizarre">
            </div>
            <div>
              <h4 class="font-semibold">Bulbizarre</h4>
              <div class="space-x-2">
                <span class="rounded-full bg-green-500 text-white px-2">Plante</span>
                <span class="rounded-full bg-purple-500 text-white px-2">Poison</span>
              </div>
            </div>
          </div>
          <div class="flex w-full items-center cursor-pointer hover:bg-gray-200">
            <div class="basis-1/3">
              <img src="https://www.pokepedia.fr/images/9/9f/Sprite_0249_HOME.png" alt="Lugia">
            </div>
            <div>
              <h4 class="font-semibold">Lugia</h4>
              <div class="space-x-2">
                <span class="rounded-full bg-pink-500 text-white px-2">Psy</span>
                <span class="rounded-full bg-indigo-500 text-white px-2">Vol</span>
              </div>
            </div>
          </div>
          <div class="flex w-full items-center cursor-pointer hover:bg-gray-200">
            <div class="basis-1/3">
              <img src="https://www.pokepedia.fr/images/0/06/Sprite_0849_Aig%C3%BCe_HOME.png" alt="Salarsen">
            </div>
            <div>
              <h4 class="font-semibold">Salarsen</h4>
              <div class="space-x-2">
                <span class="rounded-full bg-yellow-500 text-white px-2">Electrik</span>
                <span class="rounded-full bg-purple-500 text-white px-2">Poison</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close-search-modal']);

const closeModal = () => {
  emit('close-search-modal');
};
</script>