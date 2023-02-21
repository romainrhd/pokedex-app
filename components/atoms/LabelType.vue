<template>
  <span class="rounded-full px-2 text-white" :class="type.color">{{ type.name }}</span>
</template>

<script lang="ts" setup>
defineProps<{
  type: PokemonType
}>();
</script>

<style lang="scss" scoped>
.purple {
  @apply bg-purple-500;
}

.green {
  @apply bg-green-500;
}
</style>