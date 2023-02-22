<template>
  <div class="flex space-x-2 my-2">
    <button
        :class="activeTab === 'types' ? 'font-bold' : ''"
        @click="activeTab = 'types'"
    >
      Type(s)
    </button>
    <button
        :class="activeTab === 'forms' ? 'font-bold' : ''"
        @click="activeTab = 'forms'"
    >
      Formes
    </button>
  </div>
  <div v-if="activeTab === 'types'" class="flex space-x-2">
    <LabelType v-for="type in types" :type="type" />
  </div>
  <div v-if="activeTab === 'forms'" class="grid grid-cols-4 gap-4">
    <PokemonThumbnail :pokemon="pokemon" :mini="true"/>
    <PokemonThumbnail :pokemon="pokemon" :mini="true"/>
    <PokemonThumbnail :pokemon="pokemon" :mini="true"/>
  </div>
</template>

<script setup lang="ts">
import LabelType from "~/components/atoms/LabelType.vue";
import PokemonThumbnail from "~/components/atoms/PokemonThumbnail.vue";

defineProps<{
  types: PokemonType[]
}>();

const activeTab = ref('types');

const pokemon = ref({
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
</script>