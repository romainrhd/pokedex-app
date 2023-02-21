<template>
  <span class="rounded-full bg-gray-500 px-2">{{ type.name }}</span>
</template>

<script lang="ts" setup>
const props = defineProps<{
  type: {
    name: string;
    color: string;
  }
}>();
</script>