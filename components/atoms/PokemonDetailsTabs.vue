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
    <PokemonThumbnail v-for="appearance in appearances" :appearance="appearance" :mini="true"/>
  </div>
</template>

<script setup lang="ts">
import LabelType from "~/components/atoms/LabelType.vue";
import PokemonThumbnail from "~/components/atoms/PokemonThumbnail.vue";

defineProps<{
  appearances: Appearance[]
}>();

const activeTab = ref('types');
</script>