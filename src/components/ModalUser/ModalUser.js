import { ReactComponent as CloseButton } from '../../assets/close.svg';
import { ReactComponent as AuthorButton } from '../../assets/write.svg';
import { ReactComponent as UserAvatar } from '../../assets/user-avatar.svg';
import { ReactComponent as UserEmail } from '../../assets/email.svg';
import { ReactComponent as UserPhone } from '../../assets/phone.svg';

import { ReactComponent as UserWebsite } from '../../Assets/website.svg';
import * as S from './styles';

import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { GET_USER } from '../../services/api';

export const ModalUser = ({ userId, setModal }) => {
  const { request, data } = useFetch();

  useEffect(() => {
    const { endpoint, options } = GET_USER(userId);
    request(endpoint, options);
  }, [request, userId]);

  if (data)
    return (
      <S.ModalContainer>
        <S.ModalStyle>
          <header>
            <h2>
              <AuthorButton />
              Author
            </h2>
            <button onClick={() => setModal(false)}>
              <CloseButton />
            </button>
          </header>
          <div>
            <S.ModalUserAvatar>
              <UserAvatar />
              <div>
                <h3>{data.name}</h3>
                <span>@{data.username}</span>
              </div>
            </S.ModalUserAvatar>
            <ul>
              <li>
                <UserEmail />
                {data.email}
              </li>
              <li>
                <UserPhone />
                {data.phone}
              </li>
              <li>
                <UserWebsite />
                {data.website}
              </li>
            </ul>
          </div>
        </S.ModalStyle>
      </S.ModalContainer>
    );
  else return null;
};
