import styled from "styled-components";

import relatorio from "../images/relatorio.png";

export default function Page4() {
  return (
    <Container>
      <Content>
        <Title>Vantagens do SCI App:</Title>
        <Benefits>
          <Benefit>
            <img src={relatorio} alt="relatorio" />
            <p>Visualizar relatórios, impostos, contratos, documentos.</p>
          </Benefit>
          <Benefit>
            <img src={relatorio} alt="relatorio" />
            <p>Acompanhar tarefas da sua empresa contábil.</p>
          </Benefit>
          <Benefit>
            <img src={relatorio} alt="relatorio" />
            <p>Fazer a gestão dos serviços de cada um de seus clientes.</p>
          </Benefit>
          <Benefit>
            <img src={relatorio} alt="relatorio" />
            <p>Realizar solicitações à SCI.</p>
          </Benefit>
          <Benefit>
            <img src={relatorio} alt="relatorio" />
            <p>Acesso aos vídeos da TV SCI, FAQ, suporte e solicitações.</p>
          </Benefit>
          <Benefit>
            <img src={relatorio} alt="relatorio" />
            <p>
              Acesso a documentos, comprovantes de folha de pagamento e férias.
            </p>
          </Benefit>
          <Benefit>
            <img src={relatorio} alt="relatorio" />
            <p>
              Sistema altamente seguro e controle total dos acessos através do
              login próprio.
            </p>
          </Benefit>
          <Benefit>
            <img src={relatorio} alt="relatorio" />
            <p>
              Informações disponíveis como relatórios, guias de pagamento,
              contratos, documentos, CNDs e tabelas do governo.
            </p>
          </Benefit>
        </Benefits>
        <Title>
          Uma solução completa que otimiza o seu tempo a ponto de atender mais
          clientes, gerando mais receita e prestando um serviço mais eficiente!
        </Title>
        <List>
          <li>Imagine quanto tempo a sua empresa irá poupar com a SCI;</li>
          <li>
            Imagine todas as tarefas executadas pela sua equipe mais
            organizadas;
          </li>
          <li>
            Imagine evitar inconsistências nos processos dos seus clientes;
          </li>
          <li>
            Para a sua empresa e para o seu cliente, um erro pode custar caro;
          </li>
          <li>
            A SCI vai te auxiliar a evitar erros e a otimizar os processos
            contábeis, fazendo com que sua equipe não perca mais tampo com
            questões burocráticas. Ofereça um serviço mais consultivo e faça com
            que sua carteira de clientes cresça cada vez mais.
          </li>
        </List>
        <Title>
          Uma coisa é certa: se você quer ter mais controle e eficiência nos
          processos do seu escritório, a SCI tem a solução ideal para você!
        </Title>
        <MoreBenefits>
          <MoreBenefitsTitle>Conheça mais vantagens!</MoreBenefitsTitle>
          <Benefits>
            <Benefit>
              <img src={relatorio} alt="relatorio" />
              <p>Sistema integrado multitarefas.</p>
            </Benefit>
            <Benefit>
              <img src={relatorio} alt="relatorio" />
              <p>Permite atender várias empresas simultaneamente.</p>
            </Benefit>
            <Benefit>
              <img src={relatorio} alt="relatorio" />
              <p>Otimização de tarefas.</p>
            </Benefit>
            <Benefit>
              <img src={relatorio} alt="relatorio" />
              <p>
                Baixa automática de pagamento de impostos com contabilização.
              </p>
            </Benefit>
            <Benefit>
              <img src={relatorio} alt="relatorio" />
              <p>
                Robótica para preenchimento automático de documentos e impostos.
              </p>
            </Benefit>
            <Benefit>
              <img src={relatorio} alt="relatorio" />
              <p>Plano de troca global fiscal e contábil.</p>
            </Benefit>
          </Benefits>
        </MoreBenefits>
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
  margin: 60px 0;
`;

const Benefits = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`;

const Benefit = styled.div`
  width: 200px;
  height: 210px;
  text-align: center;

  img {
    width: 100px;
    margin-bottom: 10px;
  }
  p {
    color: #ffffff;
  }
`;

const MoreBenefits = styled.div`
  width: 600px;
`;

const MoreBenefitsTitle = styled.div`
  width: 100%;
  background-color: #ffffff;
  color: #3b4369;
  font-size: 25px;
  text-align: center;
  padding: 10px;
  border-radius: 500px;
  margin-bottom: 30px;
`;

const List = styled.div`
  margin: 0 150px;

  li {
    color: #ffffff;
    font-size: 16px;
    line-height: 1.5;
  }
`;
