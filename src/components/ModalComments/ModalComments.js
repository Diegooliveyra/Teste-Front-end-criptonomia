import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { Loading } from '../../helper/Loading';
import { GET_COMMENTS } from '../../services/api';

import { ReactComponent as CommnentsButton } from '../../assets/comments.svg';
import { ReactComponent as CloseButton } from '../../assets/close.svg';

import * as S from './styles';

export const ModalComments = ({ postId, setModal }) => {
  const { request, loading, data, error } = useFetch();

  useEffect(() => {
    const { endpoint, options } = GET_COMMENTS(postId);

    request(endpoint, options);
  }, [request, postId]);

  if (loading) return <Loading />;
  if (data)
    return (
      <S.ModalContainer>
        <S.ModalStyle>
          <header>
            <h1>
              <CommnentsButton />
              Comments
            </h1>
            <button onClick={() => setModal(false)}>
              <CloseButton />
            </button>
          </header>
          <div>
            <ul>
              {data.map((comment) => (
                <li key={comment.id}>
                  <h2>{comment.name}</h2>
                  <span>Email: {comment.email}</span>
                  <p>{comment.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </S.ModalStyle>
      </S.ModalContainer>
    );
  else return null;
};
