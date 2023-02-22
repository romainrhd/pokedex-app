<template>
  <section class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
    <PokemonCardList v-for="pokemon in pokemons" :pokemon="pokemon"/>
  </section>
</template>

<script lang="ts" setup>
import PokemonCardList from '../molecules/PokemonCardList.vue';

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
    image: 'https://www.pokepedia.fr/images/3/3f/Sprite_0001_HOME.png',
    caught: true,
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
    image: 'https://www.pokepedia.fr/images/5/52/Sprite_0002_HOME.png',
    caught: true,
  }
  ,
  {
    nationalNumber: '003',
    name: 'Florizarre',
    types: [
      {
        name: 'Plante',
        color: 'green'
      }, {
        name: 'Poison',
        color: 'purple'
      }
    ],
    image: 'https://www.pokepedia.fr/images/b/b3/Sprite_0003_%E2%99%82_HOME.png',
    caught: false,
  },
  {
    nationalNumber: '004',
    name: 'Salamèche',
    types: [
      {
        name: 'Feu',
        color: 'orange'
      }
    ],
    image: 'https://www.pokepedia.fr/images/d/dd/Sprite_0004_HOME.png',
    caught: false,
  }
])
</script>