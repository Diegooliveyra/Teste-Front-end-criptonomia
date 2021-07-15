import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0px 18px 41px rgba(0, 0, 0, 0.05);
  z-index: 999;
`;

export const HeaderWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
