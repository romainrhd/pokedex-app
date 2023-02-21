<template>
  <div class="flex flex-col cursor-pointer hover:bg-gray-100 hover:rounded">
    <div class="rounded bg-green-200">
      <img src="https://www.pokepedia.fr/images/3/3f/Sprite_0001_HOME.png" alt="Bulbizarre">
    </div>
    <div class="flex justify-between items-center w-full p-4">
      <div class="left">
        <h2>#{{ pokemon.nationalNumber }}</h2>
        <h1 class="text-2xl">{{ pokemon.name }}</h1>
      </div>
      <div class="flex flex-col space-y-1">
        <LabelType v-for="type in pokemon.types" :type="type" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LabelType from "~/components/LabelType.vue";

const props = defineProps<{
  pokemon: {
    nationalNumber: string;
    name: string;
    types: {
      name: string;
      color: string;
    }[]
    image: string;
  }
}>();
</script>