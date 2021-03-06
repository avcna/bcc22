import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Container } from "react-bootstrap";
import Logo from "../images/logofixx.png";
import Wa from "../images/WAicon.png";
import Ig from "../images/IGicon.png";
import Fb from "../images/FBicon.png";
import Twt from "../images/TWTicon.png";

export const Footer_sec = styled.section`
  background-color: #023047;
  padding: 3rem 7rem 1rem;
  font-size: 16px;
  color: white;
  font-family: Poppins;
  margin-top: 7rem;
`;

export const Par = styled.p`
  color: white;
`;

export const Col2 = styled(Col)`
  margin-bottom: 17px;
`;

export const Img = styled.img`
  text-align: center;
`;

export const Icon = styled.img`
  margin-right: 10px;
`;

export const Footer_down = styled.section`
  padding: 10px 0;
  font-family: Poppins;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #fff;
  background-color: #023047;
`;

export const H4 = styled.h4`
  color: white;
  margin-bottom: 2rem;
`;

export const SosmedLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: #ffb703;
  }
`;

const Footer = () => {
  return (
    <>
      <Footer_sec>
        <Row>
          <Col2 className="col-2">
            <Img src={Logo} width="150px" />
          </Col2>
          <Col2 className="col-6">
            <H4>Tentang Kami</H4>
            <Par>
              Lorem Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.{" "}
            </Par>
          </Col2>
          <Col2 className="col-4">
            <H4>Contact Person</H4>
            <Row>
              <Col2>
                <SosmedLink href="https://web.whatsapp.com/" target="_blank">
                  <Icon src={Wa} />
                  0812-3456-7890
                </SosmedLink>
              </Col2>
              <Col2>
                <SosmedLink href="https://www.facebook.com/" target="_blank">
                  <Icon src={Fb} />
                  PetLink
                </SosmedLink>
              </Col2>
            </Row>
            <Row>
              <Col2>
                <SosmedLink href="https://www.instagram.com/" target="_blank">
                  <Icon src={Ig} />
                  petlink_123
                </SosmedLink>
              </Col2>
              <Col2>
                <SosmedLink href="https://www.twitter.com/" target="_blank">
                  <Icon src={Twt} />
                  PetLink123
                </SosmedLink>
              </Col2>
            </Row>
          </Col2>
        </Row>
      </Footer_sec>
      <Footer_down>PetLink All right reserve</Footer_down>
    </>
  );
};

export default Footer;
