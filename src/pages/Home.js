import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import AppContext from '../AppContext';

export default function Home() {
  const { username } = useContext(AppContext);
  const {
    data, isLoading, isError, refetch,
  } = useQuery({
    queryKey: ['cat'],
    queryFn: async () => {
      const rsp = await Axios.get('https://catfact.ninja/fact');
      return rsp.data;
    },
  });

  if (isError) {
    return <h2>Sorry, an error has occurred</h2>;
  }

  if (isLoading) {
    return <h2>Loading…</h2>;
  }

  return (
    <>
      <h1>
        This is the home page and the user is:
        {username}
      </h1>
      <h2>
        Cat Fact:
        <button type="button" onClick={refetch}>New Cat Fact</button>
      </h2>
      <p>{data?.fact}</p>
    </>
  );
}
