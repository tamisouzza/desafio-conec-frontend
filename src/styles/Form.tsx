import styled from 'styled-components';

export const FormWrapper = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

  @media (max-width: 600px) {
    padding: 1rem;
    width: 90%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #005ad3;
  }
`;
