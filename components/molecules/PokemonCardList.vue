<template>
  <div class="flex flex-col cursor-pointer border border-slate-100 rounded hover:bg-gray-100 hover:border-slate-300">
    <div class="relative flex justify-center rounded" :class="'bg-' + pokemon.types[0].color">
      <Icon v-if="pokemon.caught" class="absolute right-0 mt-2 mr-2" name="IconPokeball" font-size="25px" />
      <img :src="pokemon.image" :alt="pokemon.name">
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
import LabelType from '../atoms/LabelType.vue';

defineProps<{
  pokemon: Pokemon
}>();
</script>

<style scoped lang="scss">
.bg-purple {
  @apply bg-purple-200;
}

.bg-green {
  @apply bg-green-200;
}

.bg-red {
  @apply bg-red-200;
}

.bg-orange {
  @apply bg-orange-200;
}
</style>