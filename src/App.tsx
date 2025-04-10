import { useGetPokemonsQuery } from './api/api';

export default function App() {
  const { data, isLoading, isSuccess, isError, error } = useGetPokemonsQuery();

  return <p>Hello world!!</p>;
}
