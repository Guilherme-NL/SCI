import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;

const StyledButton = styled.button`
  border-radius: 7px;
  height: auto;
  width: auto;
  border: none;
  background-color: #ffffff;
  color: #39496d;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #fff333;
  }

  &:disabled {
    opacity: 0.5;
    background-color: gray;
    cursor: not-allowed;
  }
`;
