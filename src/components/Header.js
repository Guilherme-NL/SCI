import styled from "styled-components";

import sci_logo from "../images/sci-logo.png";
import Button from "./Button";
import LanguageSelector from "./LanguageSelector";

export default function Header(props) {
  return (
    <Container>
      <Content>
        <img src={sci_logo} alt="logo-sci" />
        <div onClick={() => props.scrollToSection(props.page1section)}>
          Início
        </div>
        <div onClick={() => props.scrollToSection(props.page3section)}>
          Sobre
        </div>
        <div onClick={() => props.scrollToSection(props.page5section)}>
          Contato
        </div>
        <a
          href="https://areadocliente.sci10.com.br/loginForm.php"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Área do cliente</Button>
        </a>
        <LanguageSelector />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #39496d;
`;

const Content = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 200px;
  }

  div {
    color: #ffffff;
    font-size: 25px;
    cursor: pointer;
  }
`;
