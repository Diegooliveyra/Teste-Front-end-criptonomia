import * as S from './styles';

export const ModalUser = ({ data, setModal }) => {
  return (
    <S.ModalContainer>
      {data.name}
      <button onClick={() => setModal(false)}>fechar</button>
    </S.ModalContainer>
  );
};
