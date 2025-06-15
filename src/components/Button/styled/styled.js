import styled from 'styled-components'

export const StyledButton = styled.div`
  display: inline-block;
  padding: 10px 20px;
  width: 100px;
  background-color: rgb(102, 165, 247);
  color: white;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color:rgb(35, 129, 253);
  }

  &:active {
        transform: scale(0.99);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }

  &:disabled {
    background-color: #a78bfa;
    cursor: not-allowed;
  }
`;