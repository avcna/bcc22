import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import {Row,Col,Container} from 'react-bootstrap';

export const Footer_sec = styled.section`
  background-color: #ADD8E6;
  padding: 3rem 7rem 3rem;
  font-size : 13px;
`;

export const Footer_down = styled.section`
padding: 10px 0;
font-family: Poppins;
font-size: 16px;
line-height: 24px;
text-align: center;
letter-spacing: 0.2px;
color: #F9F9F9;

background-color: #373F41;

`;

const Footer=()=>{
  return(
    <>
    <Footer_sec>
    <h4>Tentang Kami</h4>
    <p>Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
    unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      <Container style={{padding:0}}>
        <Row>
          <Col>Medsos 1</Col>
          <Col>Medsos 2</Col>
          <Col>Medsos 3</Col>
        </Row>
      </Container>
    </Footer_sec>
    <Footer_down>
      Brandname All right reserve
    </Footer_down>
    </>
  );
}

export default Footer;
