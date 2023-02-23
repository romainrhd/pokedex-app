<template>
  <div class="flex flex-col">
    <header class="flex justify-between items-center">
      <button @click="handleRouterBack">
        <Icon name="heroicons:arrow-left" font-size="32px" />
      </button>
      <div class="text-center">
        <h1 class="text-2xl font-bold">{{ currentAppearance?.name ?? pokemon?.name }}</h1>
        <h2 class="text-lg font-semibold">{{  pokemon?.nationalNumber }}</h2>
      </div>
      <div>
        <Icon 
          v-if="currentAppearance?.shiny"
          :name="showShiny ? 'heroicons:sparkles-solid' : 'heroicons:sparkles'"
          font-size="32px"
          @click="toggleShiny"
          :class="showShiny && 'text-amber-500'"
        />
      </div>
    </header>
    <section class="mt-2">
      <PokemonThumbnail 
        v-if="currentAppearance"
        :appearance="showShiny && currentAppearance.shiny ? currentAppearance.shiny : currentAppearance"
      />
    </section>
    <PokemonDetailsTabs 
      v-if="pokemon && currentAppearance"
      :appearances="pokemon.appearances"
      :currentAppearance="currentAppearance"
      @change-current-appearance="changeCurrentAppearance($event)"
    />
  </div>
</template>
<script setup lang="ts">
import PokemonThumbnail from "~/components/atoms/PokemonThumbnail.vue";
import PokemonDetailsTabs from "~/components/atoms/PokemonDetailsTabs.vue";
import pokemonsData from "~/data/pokemons.json";

const router = useRouter();
const pokemon: Ref<Pokemon|undefined> = ref(pokemonsData.find(pokemon => pokemon.nationalNumber === router.currentRoute.value.params.id));
const currentAppearance: Ref<Appearance|undefined> = ref(pokemon.value?.appearances[0]);
const showShiny: Ref<boolean> = ref(false);

const handleRouterBack = () => {
  router.back();
}

const changeCurrentAppearance = (appearance: Appearance) => {
  currentAppearance.value = appearance;
  showShiny.value = false;
}

const toggleShiny = () => {
  if (currentAppearance.value?.shiny){
    showShiny.value = !showShiny.value;
  } else {
    showShiny.value = false;
  }
}
</script>