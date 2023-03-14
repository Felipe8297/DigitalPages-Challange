import styled from 'styled-components';

export const FruitCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;  

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  img {
    max-width: 120px;
    max-height: 120px;
    object-fit: contain;
  }
  
  &:not(:last-child) {
    border-bottom: none;
  }
`;

