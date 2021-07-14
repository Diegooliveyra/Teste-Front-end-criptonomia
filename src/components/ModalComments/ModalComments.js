import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { GET_COMMENTS } from '../../services/api';
import * as S from './styles';

export const ModalComments = ({ postId, setModal }) => {
  const { request, loading, data, error } = useFetch();

  useEffect(() => {
    const { endpoint, options } = GET_COMMENTS(postId);

    request(endpoint, options);
  }, [request, postId]);

  return (
    <S.ModalContainer>
      <button onClick={() => setModal(false)}>fechar</button>
      {data.map((comment) => (
        <h1 key={comment.id}>{comment.name}</h1>
      ))}
    </S.ModalContainer>
  );
};
