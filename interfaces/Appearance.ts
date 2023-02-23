interface Appearance {
  id: number;
  name?: string;
  picture: string;
  shiny?: Appearance;
  isDefault: boolean;
  types: PokemonType[];
  caught: boolean;
}