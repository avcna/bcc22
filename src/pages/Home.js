import styled from 'styled-components';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Row,Col,Container} from 'react-bootstrap';
import Footer from '../components/Footer';
import Image from '../images/images.png';
import { Link } from "react-router-dom";
import Foto1 from '../images/foto1.png';
import Foto2 from '../images/foto2.png';
import Foto3 from '../images/foto3.png';
import Kucing from '../images/kucing.png';
import {Carouseli} from '../components/ArtikelElements';

export const Section = styled.section`
  background-color:#F9F9F9;
  padding: 0 0 5rem;
`;

const Home =() =>{
  return(
    <>
    <section>
        <img className='jarak-foto'src={Image}/>
        <div className='tentangKami'>
          <h1 className='about-us'><strong>Tentang Kami</strong></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et nunc purus. Curabitur nec eros felis.
          Integer congue felis nulla, vitae vestibulum neque malesuada et. Vivamus suscipit neque non convallis dictum.</p>
      </div>
      <center><h3 className='why-us' >Kenapa Harus di PetLink?</h3></center>
      <Container className='d-flex justify-content-center'>
        <Row className='row-why-us'>
          <Col className='center-txt'>
            <img className='foto-why-us' src={Foto1}/>
            <br/>
            <b>Klinik hewan di daerah kamu</b>
            <br/>
            <div className='content-why-us'>
            <p>
              Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            </div>
          </Col>
          <Col className='center-txt'>
            <img className='foto-why-us' src={Foto2}/>
            <br/>
            <b>Konsultasi langsung dengan dokter</b>
            <br/>
            <div className='content-why-us'>
            <p>
              Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            </div>
          </Col>
          <Col className='center-txt'>
            <img className='foto-why-us' src={Foto3}/>
            <br/>
            <b>Berbagai Informasi terkait Hewan Peliharaanmu</b>
            <br/>
            <div className='content2-why-us'>
            <p>
              Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            </div>
          </Col>
        </Row>
        </Container>
    </section>
    <section>
      <div className='konsul'>
      <h1 className='konsul-home'>Konsultasikan Hewan Peliharaanmu Sekarang!</h1>
      </div>
      <Link to='/Konsultasi'><button className='btna' href="#">Mulai Reservasi</button></Link>
      <img className='kucing' src={Kucing}/>
    </section>
    <Section>
      <Carouseli/>
    </Section>
    <Footer/>
    </>
  )
}

export default Home;
