interface Pokemon {
  nationalNumber: string;
  name: string;
  types: PokemonType[];
  image: string;

  caught: boolean;
}