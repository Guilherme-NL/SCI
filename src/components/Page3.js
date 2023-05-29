import styled from "styled-components";
import React from "react";
import celular from "../images/celular.png";

function Page3({ page3section }) {
  return (
    <Container ref={page3section}>
      <Content>
        <Title>
          O controle da sua empresa e de seus clientes no seu celular
        </Title>
        <img src={celular} alt="celular" />
      </Content>
    </Container>
  );
}

export default React.forwardRef(Page3);

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(38, 60, 101, 1) 100%
  );
`;

const Content = styled.div`
  width: 900px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 600px;
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 450px) {
    margin-top: 10px;

    img {
      width: 100%;
    }
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 25px;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 25px;
  }
`;
