import { ReactComponent as CloseButton } from '../../Assets/close.svg';
import * as S from './styles';

export const ModalUser = ({ data, setModal }) => {
  return (
    <S.ModalContainer>
      <S.ModalStyle>
        <header>
          <h2>Author</h2>
          <button onClick={() => setModal(false)}>
            <CloseButton />
          </button>
        </header>
        <div>
          <h3>{data.name}</h3>
          <span>@{data.username}</span>
          <ul>
            <li>{data.email}</li>
            <li>{data.phone}</li>
            <li>{data.website}</li>
            <li>{data.company.name}</li>
            <li>{data.address.city}</li>
          </ul>
        </div>
      </S.ModalStyle>
    </S.ModalContainer>
  );
};
