import { useGetPokemonsQuery } from './api/api';

export default function App() {
  const { data, isLoading, isSuccess, isError, error } = useGetPokemonsQuery();

  return (
    <div>
      {isSuccess
        ? data.results.map((pokemon) => (
            <p key={pokemon.name}>{pokemon.name}</p>
          ))
        : '...'}
    </div>
  );
}
