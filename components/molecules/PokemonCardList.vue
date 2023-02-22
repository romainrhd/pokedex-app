<template>
  <NuxtLink :to="{ name: 'pokemon-id', params: { id: pokemon.nationalNumber }}" class="flex flex-col cursor-pointer border border-slate-100 rounded hover:bg-gray-100 hover:border-slate-300">
    <PokemonThumbnail :pokemon="pokemon" />
    <div class="flex justify-between items-center w-full p-4">
      <div class="left">
        <h2>#{{ pokemon.nationalNumber }}</h2>
        <h1 class="text-2xl">{{ pokemon.name }}</h1>
      </div>
      <div class="flex flex-col space-y-1">
        <LabelType v-for="type in pokemon.types" :type="type" />
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import LabelType from '../atoms/LabelType.vue';
import PokemonThumbnail from "~/components/atoms/PokemonThumbnail.vue";

defineProps<{
  pokemon: Pokemon
}>();
</script>