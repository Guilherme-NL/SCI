import styled from "styled-components";
import Iframe from "react-iframe";
import React from "react";

function Page1({ page1section }) {
  return (
    <Container ref={page1section}>
      <Content>
        <Title>Unimos tecnologia e contabilidade!</Title>
        <VideoSection>
          <Iframe
            url="https://www.youtube.com/embed/fH2XLb9k8To"
            id=""
            className="video"
            display="block"
            position="relative"
          />
          <Text>
            <p>
              A SCI é uma empresa brasileira de tecnologia que trabalha
              exclusivamente para o mercado contábil, sendo especialista na
              criação de sistemas para este segmento e atuando em todo
              território nacional.
            </p>
            <br />
            <p>
              Sempre à frente das necessidades, a SCI está preparada para a
              realidade contábil, contando com atendimento local e nacional.
              Nossos sistemas são desenvolvidos por profissionais da área de
              informática com experiência na atuação em escritório de
              contabilidade.
            </p>
          </Text>
        </VideoSection>
        <p>
          A SCI iniciou as suas atividades em 1991 e atualmente está presente em
          40 cidades e 20 estados do Brasil, contando com a expertise de 450
          profissionais que atendem 16 mil clientes e 100 mil usuários.
        </p>
      </Content>
    </Container>
  );
}

export default React.forwardRef(Page1);

const Container = styled.div`
  margin-bottom: 70px;
  width: 900px;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 450px) {
    margin-bottom: 25px;
  }
`;

const Content = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 450px) {
    margin-top: 25px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 25px;

  @media (max-width: 800px) {
    font-size: 40px;
  }

  @media (max-width: 450px) {
    font-size: 25px;
    text-align: center;
    margin-bottom: 5px;
  }
`;

const VideoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  width: 100%;

  .video {
    padding: 0 15px 0 0;
    width: 450px;
    height: 250px;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    margin-bottom: 0px;

    .video {
      padding: 15px 0 0 0;
      width: 100%;
      height: 250px;
    }
  }
`;

const Text = styled.div`
  padding: 0 15px 0 0;
  width: 450px;

  @media (max-width: 450px) {
    padding: 15px 0px;
    width: 100%;
  }
`;
