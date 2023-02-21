<template>
  <section class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
    <PokemonCardList v-for="pokemon in pokemons" :pokemon="pokemon"/>
  </section>
</template>

<script lang="ts" setup>
const pokemons = ref([
  {
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
    image: 'https://www.pokepedia.fr/images/3/3f/Sprite_0001_HOME.png'
  },
  {
    nationalNumber: '002',
    name: 'Herbizarre',
    types: [
        {
          name: 'Plante',
          color: 'green'
        }, {
        name: 'Poison',
        color: 'purple'
        }
    ],
    image: 'https://www.pokepedia.fr/images/3/3f/Sprite_0001_HOME.png'
  }
])
</script>