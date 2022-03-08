import styled from 'styled-components';
import ArtCard from './ArtikelElement';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';

export const ArticleCard = styled.div`
  background-color: #023047;
  border-radius: 25px;
  padding : 55.79px;
  margin: 0 133px 1.5rem;
  color: white;
`;

export const CarItem = styled.div`
  margin: 0 12rem;
  background-color:#023047;
  padding: 2rem 6rem;
`;

export const Carouseli=()=>{
  return(
    <>
    <Carousel>
  <Carousel.Item>
    <CarItem>
    test
    </CarItem>
  </Carousel.Item>
  <Carousel.Item>
  <CarItem>
  test
  </CarItem>
  </Carousel.Item>
  <Carousel.Item>
  <CarItem>
  test
  </CarItem>
  </Carousel.Item>
</Carousel>
</>
  )
}
