import styled from "styled-components";

export default function Page2() {
  return (
    <Container>
      <Box className="box1">
        <Title>VISUAL</Title>
        <p>
          Com ferramentas cada vez mais inteligentes e automatizadas, a Linha
          Visual SCI é destaque quando o assunto é produtividade. Todos os
          sistemas são multitarefas, permitindo trabalhar em várias empresas ao
          mesmo tempo de forma intuitiva e prática. Possui recursos poderosos
          como a baixa automática de pagamentos de impostos com contabilização,
          robótica para preenchimento automático de documentos e impostos, plano
          de troca global fiscal e contábil e muitas outras tecnologias que você
          precisa conhecer.
        </p>
        <button>Peça uma demonstração</button>
      </Box>
      <Box className="box2">
        <Title>VISUAL</Title>
        <p>
          Através do Novo Visual, você simplifica processos e maximiza
          resultados. Voltado para contabilidades em expansão e com grandes
          ambições, ele torna a rotina contábil mais prática e integrada a
          partir de automações ágeis e poderosas. Com ele, é possível calcular
          uma folha de pagamento e emitir um relatório de faturamento ao mesmo
          tempo. O Novo Visual é multiusuários, multiempresas, multimódulos,
          multitelas e multitarefas. É um sistema robusto, completo e
          multifuncional, pensado para impulsionar o seu escritório contábil.
          Possui recursos para automatizar processos, acabar com o retrabalho,
          gerenciar sua equipe e muito mais. Tudo para levar você ainda mais
          longe! Conheça a tecnologia do Novo Visual e atinja novos patamares.
        </p>
        <button>Peça uma demonstração</button>
      </Box>
      <Box className="box3">
        <Title>VISUAL</Title>
        <p>
          A SCI está preparada para o futuro da contabilidade, pois investe
          constantemente na mudança cultural necessária para adaptar suas
          tecnologias às novas necessidades do mercado. O Ambiente Contábil
          ÚNICO é o resultado deste conceito. Com foco na gestão, previne erros,
          retrabalhos e oferece ainda mais produtividade com segurança e
          organização. As integrações inovadoras e automáticas fazem com que o
          ÚNICO seja veloz e garantem a consistência dos dados dos clientes da
          contabilidade.
        </p>
        <button>Peça uma demonstração</button>
      </Box>
      <Box className="box4">
        <Title>VISUAL</Title>
        <p>
          Tecnologias contábeis WEB SCI! É modernidade! É a sua contabilidade na
          era do autoatendimento! Seja uma contabilidade digital! As Tecnologias
          WEB SCI são aplicações exclusivas para as empresas de contabilidade e
          administradoras de condomínios que desejam ser um diferencial no
          mercado contábil, desta forma, são altamente competitivas nos serviços
          oferecidos aos seus clientes. Devido ao grande número de obrigações e
          impostos as soluções WEB SCI são fundamentais para a viabilização de
          todos departamentos das empresas de serviços contábeis e condomínios.
        </p>
        <button>Peça uma demonstração</button>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 70px;

  .box1 {
    background-color: #38476c;
  }
  .box2 {
    background-color: #50366e;
  }

  .box3 {
    background-color: #333333;
  }

  .box4 {
    background-color: #001748;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  border-radius: 130px;
  padding: 25px 100px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Title = styled.div``;
