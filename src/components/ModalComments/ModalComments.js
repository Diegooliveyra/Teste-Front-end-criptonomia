import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { GET_COMMENTS } from '../../services/api';
import * as S from './styles';

export const ModalComments = ({ id, setModal }) => {
  const { request, loading, data, error } = useFetch();

  useEffect(() => {
    const { endpoint, options } = GET_COMMENTS(id);

    request(endpoint, options);
  }, [request]);

  return (
    <S.ModalContainer>
      <button onClick={() => setModal(false)}>fechar</button>
      {data.map((comment) => (
        <h1 key={comment.id}>{comment.name}</h1>
      ))}
    </S.ModalContainer>
  );
};
