import styled from 'styled-components';

export const PostContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 8px;
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

  p {
    font-size: 14px;
    margin: 16px 0;
  }

  footer {
    display: flex;
    justify-content: space-between;

    button {
      background: transparent;
      border: 0;
      cursor: pointer;
    }
  }
`;
