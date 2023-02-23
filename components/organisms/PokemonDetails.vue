<template>
  <div class="flex flex-col">
    <header class="flex justify-between items-center">
      <button @click="handleRouterBack">
        <Icon name="heroicons:arrow-left" font-size="32px" />
      </button>
      <div class="text-center">
        <h1 class="text-2xl font-bold">Bulbizarre</h1>
        <h2 class="text-lg font-semibold">#001</h2>
      </div>
      <div>
        <Icon name="heroicons:sparkles-solid" font-size="32px" class="text-amber-500"/>
      </div>
    </header>
    <section class="mt-2">
      <PokemonThumbnail v-if="pokemon" :appearance="pokemon.appearances[0]"/>
    </section>
    <PokemonDetailsTabs v-if="pokemon" :appearances="pokemon.appearances" />
  </div>
</template>
<script setup lang="ts">
import PokemonThumbnail from "~/components/atoms/PokemonThumbnail.vue";
import PokemonDetailsTabs from "~/components/atoms/PokemonDetailsTabs.vue";
import pokemonsData from "~/data/pokemons.json";

const router = useRouter();
const pokemon = ref(pokemonsData.find(pokemon => pokemon.nationalNumber === router.currentRoute.value.params.id));

const handleRouterBack = () => {
  router.back();
}
</script>