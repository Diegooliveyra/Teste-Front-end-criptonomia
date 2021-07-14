import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { GET_USER } from '../../services/api';
import { ModalComments } from '../ModalComments/ModalComments';
import { ModalUser } from '../ModalUser/ModalUser';
import * as S from './style';

export const Post = ({ dataPost }) => {
  const { request, loading, data, error } = useFetch();
  const [id, setId] = useState(1);
  const [modalUser, setModalUser] = useState(false);
  const [modalComments, setModalComments] = useState(false);

  useEffect(() => {
    const { endpoint, options } = GET_USER(id);

    request(endpoint, options);
  }, [request, id]);

  function handleClick(id) {
    setId(id);
    setModalComments(true);
  }

  return (
    <S.PostContainer>
      {modalUser && <ModalUser data={data} setModal={setModalUser} />}
      {dataPost &&
        dataPost.map((post) => (
          <S.PostCard key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => setModalUser(true)}>User</button>
            <button onClick={() => handleClick(post.userId)}>Comments</button>
            {modalComments && (
              <ModalComments id={post.id} setModal={setModalComments} />
            )}
          </S.PostCard>
        ))}
    </S.PostContainer>
  );
};
