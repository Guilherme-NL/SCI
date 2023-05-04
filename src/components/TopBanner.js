import styled from "styled-components";
import banner from "../images/banner_topo.png";

export default function TopBanner() {
  return (
    <Container>
      <img src={banner} alt="banner" />
    </Container>
  );
}

const Container = styled.div`
  img {
    width: 100%;
  }
`;
