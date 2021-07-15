import styled from 'styled-components';

export const PostContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 120px;
`;

export const PostCard = styled.div`
  max-width: 390px;
  width: 100%;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 840px) {
    max-width: 100%;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  img {
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
    margin: 16px 0;
    flex: 1;
    &:first-letter {
      text-transform: capitalize;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;

    button {
      background: transparent;
      border: 0;
      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;
