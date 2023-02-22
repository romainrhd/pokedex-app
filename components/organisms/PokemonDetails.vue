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
      <PokemonThumbnail :pokemon="pokemon"/>
    </section>
    <PokemonDetailsTabs :types="pokemon.types" />
  </div>
</template>
<script setup lang="ts">
import PokemonThumbnail from "~/components/atoms/PokemonThumbnail.vue";
import PokemonDetailsTabs from "~/components/atoms/PokemonDetailsTabs.vue";

const router = useRouter();
const pokemon: Pokemon = ref({
  nationalNumber: '001',
  name: 'Bulbizarre',
  types: [
    {
      name: 'Plante',
      color: 'green'
    }, {
      name: 'Poison',
      color: 'purple'
    }
  ],
  image: 'https://www.pokepedia.fr/images/3/3f/Sprite_0001_HOME.png',
  caught: true,
});

const handleRouterBack = () => {
  router.back();
}
</script>