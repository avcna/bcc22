import {DivSearch,Img,SearchInput, Klinik} from '../components/ClinicElement';
import searchIcon from '../images/magnifying-glass.png';
import Footer from '../components/Footer';
import {Section, Title} from '../components/Basic';
import {ArticleCard} from '../components/ArtikelElements';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: #ADD8E6;
  border-radius:25px;
  border: none;
  outline: none;
  padding: 0.3rem 2rem;
  margin-right: 36px;
  margin-bottom: 24px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  align-items: center;
  letter-spacing: 0.2px;
  color: #373F41;
  box-shadow: 4px 8px 10px 0px #00000040;

  &:hover{
    background-color: #cbecf7;
  }
`;

export const Kategori = styled.div`
  margin: 3.875rem 133px 0;
`;


const Articles =()=>{
  return(
    <>
      <section>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <DivSearch style={{display: 'flex', justifyContent: 'center'}}>
        <Img src={searchIcon}/>
        <SearchInput type='text' placeholder='Cari Artikel'/>
      </DivSearch>
      </div>
      <Kategori>
        <h3>Kategori</h3>
        <Button>Kucing</Button>
        <Button>Anjing</Button>
        <Button>Kelinci</Button>
        <Button>Hamster</Button>
        <Button>Ikan</Button>
        <Button>Reptil</Button>
        <Button>Perawatan</Button>
        <Button>Kesehatan</Button>
        <Button>Penanganan Pertama</Button>
        <Button>Burung</Button>
      </Kategori>
      </section>
      <Section>
        <Title>Artikel Terkini</Title>
        <ArticleCard>
          test
        </ArticleCard>
      </Section>
      <Footer/>

    </>
  )
}

export default Articles;
