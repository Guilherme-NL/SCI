import styled from "styled-components";
import React from "react";

import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

function Page5({ page5section }) {
  return (
    <Container ref={page5section}>
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
        <Text>Entre em contato:</Text>
        <Contact>
          <div>
            <MdLocationOn className="icon" />
            <p>Endereço comercial</p>
          </div>
          <div>
            <MdPhoneIphone className="icon" />
            <p>Telefone</p>
          </div>
          <div>
            <MdEmail className="icon" />
            <p>Mande-nos um e-mail</p>
          </div>
        </Contact>
      </Content>
    </Container>
  );
}

export default React.forwardRef(Page5);

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
  margin-bottom: 30px;
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

const Contact = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  .icon {
    font-size: 30px;
    color: #ffffff;
    margin-bottom: 10px;
  }

  p {
    color: #ffffff;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
