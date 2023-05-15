import styled from "styled-components";

import sci_logo from "../images/sci-logo.png";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export default function Footer(props) {
  return (
    <Container>
      <Content>
        <FooterMenu>
          <img src={sci_logo} alt="logo-sci" />
          <div
            className="pointer"
            onClick={() => props.scrollToSection(props.page1section)}
          >
            Início
          </div>
          <div
            className="pointer"
            onClick={() => props.scrollToSection(props.page3section)}
          >
            Sobre
          </div>
          {/* <div
            className="pointer"
            onClick={() => props.scrollToSection(props.page5section)}
          >
            Contato
          </div> */}
          <SocialMedia>
            <p>Conheça nossas reses:</p>
            <div>
              <a
                href="https://www.instagram.com/sciminasgerais/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram className="icon" />
              </a>
              <a
                href="https://www.facebook.com/SciMinasGerais"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/sci-minas-gerais-grupo-sci-premier-tech-mg/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="icon" />
              </a>
              <a
                href="https://www.youtube.com/@scisistemas"
                target="_blank"
                rel="noreferrer"
              >
                <BsYoutube className="icon" />
              </a>
              <a
                href="https://twitter.com/scibrasil"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter className="icon" />
              </a>
            </div>
          </SocialMedia>
        </FooterMenu>
        <p>SCI sistema Contábeis 2023 - todos os direitos reservados.</p>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 20px 0;
  background-color: #001748;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;

  p {
    color: #ffffff;
    text-align: center;
  }

  img {
    width: 150px;
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 400px) {
    padding: 0 10px;

    div {
      font-size: 14px;
    }

    img {
      width: 100px;
      height: 35px;
    }
  }
`;

const FooterMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  margin-bottom: 10px;

  .icon {
    font-size: 25px;
    color: #ffffff;
    margin-top: 10px;
  }

  .pointer {
    cursor: pointer;
  }
`;

const SocialMedia = styled.div`
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
