interface Appearance {
  name?: string;
  picture: string;
  shiny?: string;
  isDefault: boolean;
  types: PokemonType[];
  caught: boolean;
}