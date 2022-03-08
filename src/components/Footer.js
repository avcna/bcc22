import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import {Row,Col,Container} from 'react-bootstrap';
import Logo from '../images/logofixx.png';

export const Footer_sec = styled.section`
  background-color: #023047;
  padding: 3rem 7rem 1rem;
  font-size : 16px;
  color: white;
  font-family: Poppins;
`;

export const Par = styled.p`
  color: white;
`;

export const Img = styled.img`
  text-align: center;
`;

export const Footer_down = styled.section`
padding: 10px 0;
font-family: Poppins;
font-size: 16px;
line-height: 24px;
text-align: center;
letter-spacing: 0.2px;
color: #FFF;
background-color: #023047;

`;

const Footer=()=>{
  return(
    <>
    <Footer_sec>
    <Row>
      <Col className='col-2'>
        <Img src={Logo} width='150px'/>
      </Col>
      <Col className='col-6'>
      <h4>Tentang Kami</h4>
      <Par>Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type specimen book. </Par>
      </Col>
      <Col className='col-4'>
        <h4>Contact Person</h4>
        <Row>
          <Col>
            WA
          </Col>
          <Col>
            FB
          </Col>
        </Row>
        <Row>
          <Col>
            IG
          </Col>
          <Col>
            TWT
          </Col>
        </Row>
      </Col>
    </Row>
    </Footer_sec>
    <Footer_down>
      Brandname All right reserve
    </Footer_down>
    </>
  );
}

export default Footer;
