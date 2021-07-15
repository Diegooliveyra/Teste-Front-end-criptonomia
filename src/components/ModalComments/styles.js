import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.7);

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

  transform: translateY(-300px);
  animation: up 0.5s forwards;

  @media (max-width: 680px) {
    height: 95vh;
    margin: 10px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    h1 {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-left: 12px;
    }

    button {
      background: transparent;
      border: 0;
      cursor: pointer;
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  div {
    max-height: 80vh;
    overflow: scroll;
    overflow-x: hidden;

    ul {
      margin-right: 20px;

      li {
        margin: 15px 0;
        border-bottom: 1px solid #ccc;

        padding: 15px;
      }
    }
  }

  h2 {
    font-size: 20px;

    &:first-letter {
      text-transform: capitalize;
    }
  }

  span {
    font-size: 14px;
    display: block;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 24px;

    &:first-letter {
      text-transform: capitalize;
    }
  }

  @keyframes up {
    to {
      transform: translateY(0);
    }
  }
`;
