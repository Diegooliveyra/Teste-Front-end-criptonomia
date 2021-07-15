import useFetch from '../hooks/useFetch';
import { Post } from '../components/Post/Post';
import { Container } from '../styles/GlobalStyle';
import { useEffect } from 'react';
import { GET_POST } from '../services/api';

export const Home = () => {
  const { request, data } = useFetch();

  useEffect(() => {
    const { endpoint, options } = GET_POST('');

    request(endpoint, options);
  }, [request]);
  return (
    <Container>
      <Post dataPost={data} />
    </Container>
  );
};
