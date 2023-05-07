import styled from "styled-components";
import sci_logo from "../images/sci-logo.png";

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={sci_logo} alt="logo-sci" />
        <p>Inicio</p>
        <p>Sobre</p>
        <p>Contato</p>
        <p>Área do cliente</p>
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

  img {
    width: 200px;
  }

  p {
    color: #fff;
  }
`;
