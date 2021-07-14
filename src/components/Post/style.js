import styled from 'styled-components';

export const PostContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

export const PostCard = styled.div`
  max-width: 500px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;

  p {
    font-size: 14px;
    margin-top: 16px;
  }
`;
