import styled from "styled-components";
import React, { useRef } from "react";

import Header from "../components/Header";
import TopBanner from "../components/TopBanner";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";
import Page5 from "../components/Page5";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

export default function App() {
  const page1section = useRef(null);
  const page3section = useRef(null);
  const page5section = useRef(null);

  function scrollToSection(elementRef) {
    console.log(elementRef);
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <Container>
      <Header
        scrollToSection={scrollToSection}
        page1section={page1section}
        page3section={page3section}
        page5section={page5section}
      />
      <TopBanner />
      <Page1 page1section={page1section} />
      <Page2 scrollToSection={scrollToSection} page5section={page5section} />
      <Page3 page3section={page3section} />
      <Page4 />
      <Page5 page5section={page5section} />
      <Footer
        scrollToSection={scrollToSection}
        page1section={page1section}
        page3section={page3section}
        page5section={page5section}
      />
      <WhatsApp />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
