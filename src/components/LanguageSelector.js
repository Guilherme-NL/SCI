import styled from "styled-components";
import React from "react";

export default function LanguageSelector() {
  const I18N_STORAGE_KEY = "i18nextLng";

  function handleSelectChange(e) {
    localStorage.setItem(I18N_STORAGE_KEY, e.target.value);
    window.location.reload();
  }

  return (
    <Container>
      <LanguageOptions>
        <button onClick={handleSelectChange} value="en-US">
          EN
        </button>
        <h1>|</h1>
        <button onClick={handleSelectChange} value="pt-BR">
          PT
        </button>
      </LanguageOptions>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 10;
  right: 0;
  z-index: 1;
  margin: 20px;
  border-radius: 7px;
`;

const LanguageOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #ffffff;

    &:hover {
      font-weight: bold;
    }

    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px rgba(94, 141, 197, 0.5);
    }
  }
`;
