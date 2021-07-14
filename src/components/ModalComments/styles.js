import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.7);
  filter: blur(1.9);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalStyle = styled.div`
  width: 100%;
  max-width: 800px;

  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;

  @media (max-width: 680px) {
    height: 95vh;
    margin: 10px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }

  div {
    max-height: 80vh;
    overflow: scroll;
    ul li {
      margin: 15px 0;
      border: 1px solid #ccc;
      padding: 15px;
    }
  }

  h2 {
    font-size: 20px;
  }

  span {
    font-size: 14px;
    display: block;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }
`;