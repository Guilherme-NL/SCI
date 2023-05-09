import styled from "styled-components";

import Header from "../components/Header";
import Introduction from "../components/Introduction";
import TopBanner from "../components/TopBanner";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";

export default function App() {
  return (
    <Container>
      <Header />
      <TopBanner />
      <Introduction />
      <Page2 />
      <Page3 />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
