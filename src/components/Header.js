import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Content>
        <p>logo</p>
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
`;
