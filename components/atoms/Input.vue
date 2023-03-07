<template>
  <input
      :type="type"
      class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
      :placeholder="placeholder ?? ''"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts" setup>
defineProps<{
  type: string,
  placeholder?: string,
  modelValue?: string | number
}>();

defineEmits<{
  'update:modelValue': string | number
}>();
</script>