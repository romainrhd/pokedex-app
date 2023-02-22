<template>
  <section class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
    <PokemonCardList v-if="pokemons" v-for="pokemon in pokemons" :pokemon="pokemon"/>
  </section>
</template>

<script lang="ts" setup>
import PokemonCardList from '../molecules/PokemonCardList.vue';
import pokemonsData from '../../data/pokemons.json';

const pokemons = ref(pokemonsData)
</script>