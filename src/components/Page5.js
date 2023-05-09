import styled from "styled-components";

export default function Page5() {
  return (
    <Container>
      <Content>
        <Title>Insira o seu escritório contábil no mundo digital</Title>
        <ContentText>
          <SubTitle>Vamos agendar uma demonstração gratuita?</SubTitle>
          <Text>
            Entre em contato com a gente.Teremos prazer em ajudar a tornar o seu
            escritório mais eficiente.
          </Text>
        </ContentText>
        <Form>
          <Field>
            <Text>Nome:</Text>
            <StyledInput></StyledInput>
          </Field>
          <Field>
            <Text>Empresa:</Text>
            <StyledInput></StyledInput>
          </Field>
          <Field>
            <Text>Cidade:</Text>
            <StyledInput></StyledInput>
          </Field>
          <Field>
            <Text>Telefone:</Text>
            <StyledInput></StyledInput>
          </Field>
          <Field>
            <Text>Quantidade de terminais, sistema atual:</Text>
            <StyledTextArea />
          </Field>
          <Field>
            <Text>E-mail:</Text>
            <StyledInput></StyledInput>
          </Field>
          <StyledButton>Enviar</StyledButton>
        </Form>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #3b4369;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  margin-bottom: 70px;
`;

const Title = styled.div`
  font-weight: bold;
  color: #ffffff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

const SubTitle = styled.div`
  font-weight: bold;
  color: #ffffff;
  font-size: 25px;
  margin-bottom: 5px;
`;

const Text = styled.div`
  color: #ffffff;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 5px;
`;

const ContentText = styled.div`
  width: 600px;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const Field = styled.div`
  margin-bottom: 15px;

  .blue {
    color: #3b4369;
  }
`;

const StyledInput = styled.input`
  width: 400px;
  height: 40px;
  border: 1px solid #ffffff;
  background-color: #3b4369;
  border-radius: 200px;
  padding: 10px;
  font-size: 16px;
  line-height: 1.2;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
`;

const StyledTextArea = styled.textarea`
  width: 900px;
  height: 80px;
  border: 1px solid #ffffff;
  background-color: #3b4369;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  line-height: 1.2;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
`;

const StyledButton = styled.button`
  width: 400px;
  height: 40px;
  border: 1px solid #ffffff;
  background-color: #ffffff;
  border-radius: 200px;
  color: #3b4369;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
  margin-top: 26.5px;
  cursor: pointer;
`;
