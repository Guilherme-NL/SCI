import styled from "styled-components";

export default function Introduction() {
  return (
    <Container>
      <Content>
        <Title>Unimos tecnologia e contabilidade!</Title>
        <VideoSection>
          <Video width="100%" height="auto" controls>
            <source src="url" type="video/mp4" />
          </Video>
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

const Container = styled.div`
  margin-bottom: 70px;
`;

const Content = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 25px;
`;

const VideoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  width: 100%;
`;

const Video = styled.video`
  padding: 0 15px 0 0;
  width: 450px;
`;

const Text = styled.div`
  padding: 0 15px 0 0;
  width: 450px;
`;
