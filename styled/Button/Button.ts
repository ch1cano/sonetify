import styled from "styled-components";

export const Button = styled.button`
  background: #000000;
  border-radius: 40px;
  color: white;
  transition: all 0.2s ease-out;
  text-transform: uppercase;
  text-align: center;
  font-family: "firs", Arial, Helvetica, sans-serif;
  &:hover {
    background: #1f1f1f;
  }
  &:active {
    background: #000000;
  }
`;
