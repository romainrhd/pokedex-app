<template>
  <div class="relative flex justify-center rounded" :class="'bg-' + appearance.types[0].color">
    <Icon v-if="appearance.caught && !mini" class="absolute right-0 mt-2 mr-2" name="IconPokeball" font-size="25px" />
    <img :src="appearance.picture" :alt="appearance.name">
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  appearance: Appearance,
  mini?: boolean,
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