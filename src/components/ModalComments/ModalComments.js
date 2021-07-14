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
      <S.ModalStyle>
        <header>
          <h1>Comentarios:</h1>
          <button onClick={() => setModal(false)}>fechar</button>
        </header>
        <div>
          <ul>
            {data.map((comment) => (
              <li>
                <h2>{comment.name}</h2>
                <span>Email: {comment.email}</span>
                <p key={comment.id}>{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </S.ModalStyle>
    </S.ModalContainer>
  );
};
