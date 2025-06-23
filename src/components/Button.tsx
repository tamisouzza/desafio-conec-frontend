import styled from 'styled-components';

const Button = styled.button`
  background-color: #6200ee;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3700b3;
  }
`;

export default Button;
