import styled from 'styled-components';



export const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width: 300px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
    transition: transform 0.2s ease-in-out;
  }

  img:hover {
    transform: scale(1.1);
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 5px;
  }

  button {
    background-color: #e62b1e;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    padding: 10px;
    margin-top: 20px;
    transition: background-color 0.2s ease-in-out;
  }

  button:hover {
    background-color: #ff483b;
  }
`;
