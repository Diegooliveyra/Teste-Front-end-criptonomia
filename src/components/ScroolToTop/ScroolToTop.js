import * as S from './styles';

export const ScroolToTop = () => {
  return (
    <S.ButtonScrool onClick={() => window.scrollTo(0, 0)}>
      Voltar ao topo ▲
    </S.ButtonScrool>
  );
};
