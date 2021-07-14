import { ReactComponent as CloseButton } from '../../Assets/close.svg';
import { ReactComponent as AuthorButton } from '../../Assets/write.svg';
import { ReactComponent as UserAvatar } from '../../Assets/user-avatar.svg';
import { ReactComponent as UserEmail } from '../../Assets/email.svg';
import { ReactComponent as UserPhone } from '../../Assets/phone.svg';
import { ReactComponent as UserAddress } from '../../Assets/local.svg';
import { ReactComponent as UserCompany } from '../../Assets/company.svg';
import { ReactComponent as UserWebsite } from '../../Assets/website.svg';
import * as S from './styles';

export const ModalUser = ({ data, setModal }) => {
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
            <li>
              <UserCompany />
              {data.company.name}
            </li>
            <li>
              <UserAddress />
              {data.address.city}
            </li>
          </ul>
        </div>
      </S.ModalStyle>
    </S.ModalContainer>
  );
};
