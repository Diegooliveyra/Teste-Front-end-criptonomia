import { ReactComponent as Logo } from '../../Assets/logo.svg';
import { ReactComponent as LogoGithub } from '../../Assets/github.svg';
import { ReactComponent as LogoLinkedin } from '../../Assets/linkedin.svg';

import * as S from './styles.js';

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <Logo />
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/diego-de-oliveira-brito/"
              target="_blank"
              rel="noreferrer"
            >
              <LogoLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Diegooliveyra"
              target="_blank"
              rel="noreferrer"
            >
              <LogoGithub />
            </a>
          </li>
        </ul>
      </S.HeaderWrapper>
    </S.Header>
  );
};
