import styled from "styled-components";
import celular from "../images/celular.png";

export default function Page3() {
  return (
    <Container>
      <Content>
        <Title>
          O controle da sua empresa e de seus clientes no seu celular
        </Title>
        <img src={celular} alt="celular" />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-image: linear-gradient(
    0deg,
    rgba(59, 67, 105, 1) 2%,
    rgba(244, 244, 244, 1) 55%,
    rgba(244, 244, 244, 1) 100%
  );
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 600px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 25px;
`;
