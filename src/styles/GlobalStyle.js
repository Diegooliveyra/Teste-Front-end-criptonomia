import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  :root {
    --brand-primary-color: #211e22  ;
    --text-color: #333333;
    --full-white: #ffffff;
    --primary-shadow: 0px 18px 41px rgba(0, 0, 0, 0.05);
    --font-family-primary: 'Poppins', sans-serif;
  }
  body, button {
    color: var(--text-color);
    font-family: var(--font-family-primary);
  }
  body, button, input, h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-primary);
  }
  ul li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  
`;
export default GlobalStyles;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  color: var(--brand-primary-color);
  font-size: 22px;

  &:first-letter {
    text-transform: capitalize;
  }
`;
