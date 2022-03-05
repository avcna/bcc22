import styled from 'styled-components';
import ArtCard from './ArtikelElement';

export const ArticleCard = styled.div`
  background-color: #cbecf7;
  border-radius: 25px;
  padding : 55.79px;
  margin: 0 133px 1.5rem;
`;

export const Carousel=()=>{
  return(
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
  <div className="carousel-item active">
    <ArtCard/>
  </div>
  <div className="carousel-item">
    <ArtCard/>
  </div>
  <div className="carousel-item">
    <ArtCard/>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>
</>
  )
}
