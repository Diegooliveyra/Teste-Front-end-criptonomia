import useFetch from '../hooks/useFetch';
import { Post } from '../components/Post/Post';
import { Container } from '../styles/GlobalStyle';
import { useEffect } from 'react';
import { GET_POST } from '../services/api';
import { Loading } from '../helper/Loading';

export const Home = () => {
  const { request, data, loading, error } = useFetch();

  useEffect(() => {
    const { endpoint, options } = GET_POST('');

    request(endpoint, options);
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <h1>Houve um erro </h1>;
  if (data)
    return (
      <Container>
        <Post dataPost={data} />
      </Container>
    );
  else return null;
};
