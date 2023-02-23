<template>
  <div class="flex space-x-2 my-2">
    <button
        :class="activeTab === 'types' ? 'font-bold' : ''"
        @click="activeTab = 'types'"
    >
      Type(s)
    </button>
    <button
        v-if="appearances.length > 1"
        :class="activeTab === 'forms' ? 'font-bold' : ''"
        @click="activeTab = 'forms'"
    >
      Formes
    </button>
  </div>
  <div v-if="activeTab === 'types'" class="flex space-x-2">
    <LabelType v-for="type in currentAppearance.types" :type="type" />
  </div>
  <div v-if="activeTab === 'forms'" class="grid grid-cols-4 gap-4 text-center items-end">
    <div v-for="appearance in appearances">
      <Icon v-if="appearance.id === currentAppearance.id" name="heroicons:chevron-down" size="24px" />
      <PokemonThumbnail :appearance="appearance" :mini="true" @click="changeCurrentAppearance(appearance)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LabelType from "~/components/atoms/LabelType.vue";
import PokemonThumbnail from "~/components/atoms/PokemonThumbnail.vue";

defineProps<{
  appearances: Appearance[],
  currentAppearance: Appearance,
}>();

const activeTab = ref('types');

const emit = defineEmits(['change-current-appearance']);
const changeCurrentAppearance = (appearance: Appearance) => {
  emit('change-current-appearance', appearance);
}
</script>