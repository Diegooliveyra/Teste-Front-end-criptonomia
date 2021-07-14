import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { GET_USER } from '../../services/api';
import { ModalComments } from '../ModalComments/ModalComments';
import { ModalUser } from '../ModalUser/ModalUser';
import { Loading } from '../../Helper/Loading';

import { ReactComponent as AuthorButton } from '../../Assets/write.svg';
import { ReactComponent as CommnentsButton } from '../../Assets/comments.svg';

import * as S from './style';
import { Title } from '../../styles/GlobalStyle';

export const Post = ({ dataPost }) => {
  const { request, loading, data, error } = useFetch();
  const [userId, setUserId] = useState(1);
  const [postId, setPostId] = useState(1);
  const [modalUser, setModalUser] = useState(false);
  const [modalComments, setModalComments] = useState(false);

  useEffect(() => {
    const { endpoint, options } = GET_USER(userId);
    console.log(userId);
    request(endpoint, options);
  }, [request, userId]);

  function handleClick(id) {
    setUserId(id);
    setModalUser(true);
  }

  function handleComments(id) {
    setPostId(id);
    setModalComments(true);
  }

  if (loading) return <Loading />;
  if (data)
    return (
      <S.PostContainer>
        {modalUser && <ModalUser data={data} setModal={setModalUser} />}
        {modalComments && (
          <ModalComments postId={postId} setModal={setModalComments} />
        )}
        {dataPost &&
          dataPost.map((post) => (
            <S.PostCard key={post.id}>
              <Title>{post.title}</Title>
              <p>{post.body}</p>
              <footer>
                <button onClick={() => handleClick(post.userId)}>
                  <AuthorButton />
                  Author
                </button>
                <button onClick={() => handleComments(post.id)}>
                  <CommnentsButton />
                  Comments
                </button>
              </footer>
            </S.PostCard>
          ))}
      </S.PostContainer>
    );
  else return null;
};
