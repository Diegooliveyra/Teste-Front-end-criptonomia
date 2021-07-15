import { ScroolToTop } from '../ScroolToTop/ScroolToTop';

import * as S from './styles.js';

export const Footer = () => {
  return (
    <S.Footer>
      <p>
        Desenvolvido com 💙 por{' '}
        <a href="https://github.com/Diegooliveyra/" target="blank">
          Diego Oliveira
        </a>
      </p>
      <ScroolToTop />
    </S.Footer>
  );
};
