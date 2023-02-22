interface Appearance {
  name?: string;
  picture: string;
  isDefault: boolean;
  isShiny: boolean;
  types: PokemonType[];
  caught: boolean;
}