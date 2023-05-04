import styled from "styled-components";

import Header from "../components/Header";
import Introduction from "../components/Introduction";
import TopBanner from "../components/TopBanner";
import Page2 from "../components/Page2";

export default function App() {
  return (
    <Container>
      <Header />
      <TopBanner />
      <Content>
        <Introduction />
        <Page2 />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 900px;
`;
