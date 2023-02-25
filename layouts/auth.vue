<template>
  <div class="flex flex-col items-center justify-center min-h-screen py-2">
    <div class="flex flex-col items-center justify-center w-full space-y-4">
      <div class="flex flex-col items-center justify-center space-y-2">
        <IconPokeball class="w-20 h-20" />
        <h1 class="text-3xl font-bold">{{ title }}</h1>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "#imports";

const router = useRouter();
const title = ref("");

onMounted(() => {
  switch (router.currentRoute.value.name) {
    case "login":
      title.value = "Se connecter";
      break;
    case "register":
      title.value = "S'inscrire";
      break;
  }
});
</script>