import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type PokemonsList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

type Pokemon = {
  name: string;
  url: string;
};

export const pokemonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon/' }),
  endpoints: (builder) => ({
    getPokemons: builder.query<PokemonsList, void>({
      query: () => '',
    }),
  }),
});

export const { useGetPokemonsQuery } = pokemonApi;
