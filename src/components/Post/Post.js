import { useState } from 'react';
import { ModalComments } from '../ModalComments/ModalComments';
import { ModalUser } from '../ModalUser/ModalUser';

import img from '../../assets/dog.jpg';

import { ReactComponent as AuthorButton } from '../../assets/write.svg';
import { ReactComponent as CommnentsButton } from '../../assets/comments.svg';

import * as S from './style';
import { Title } from '../../styles/GlobalStyle';

export const Post = ({ dataPost }) => {
  const [userId, setUserId] = useState(1);
  const [postId, setPostId] = useState(1);
  const [modalUser, setModalUser] = useState(false);
  const [modalComments, setModalComments] = useState(false);

  function handleGetUserData(id) {
    setUserId(id);
    setModalUser(true);
  }

  function handleGetComments(id) {
    setPostId(id);
    setModalComments(true);
  }

  if (dataPost)
    return (
      <S.PostContainer>
        {modalUser && <ModalUser userId={userId} setModal={setModalUser} />}
        {modalComments && (
          <ModalComments postId={postId} setModal={setModalComments} />
        )}

        {dataPost &&
          dataPost.map((post) => (
            <S.PostCard key={post.id}>
              <img src={img} alt="" />
              <div>
                <Title>{post.title}</Title>
                <p>{post.body}</p>
                <footer>
                  <button onClick={() => handleGetUserData(post.userId)}>
                    <AuthorButton />
                    About to author
                  </button>
                  <button onClick={() => handleGetComments(post.id)}>
                    <CommnentsButton />
                    Comments
                  </button>
                </footer>
              </div>
            </S.PostCard>
          ))}
      </S.PostContainer>
    );
  else return null;
};
