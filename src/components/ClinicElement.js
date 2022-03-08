import styled from 'styled-components';
import searchIcon from '../images/magnifying-glass.png';
import App from '../App';

export const Card = styled.section`
  font-size: 16px;
  padding: 29px 40px 49px 40px;
  background-color: #023047;
  color:white;
  margin: 0 165px 30px;
  font-family: Poppins;
`;

export const DivSearch = styled.div`
  background-color: #F9F9F9;
  border-radius: 50px;
  width: 1000px;
  padding: 9px 0;
  z-index: 5;
  margin-top: 44px;
  box-shadow: 4px 8px 10px 0px #00000040;
`;

export const SearchInput = styled.input`
  background-color: #F9F9F9;
  height: 33px;
  font-size: 15px;
  outline: none;
  border: none;
  width: 850px;
  margin-left: 1.4rem;

`;

export const Img = styled.img`
  height: 25px;
  position: relative;
  top: 3px;
`;

export const Searching = ({id, name, search})=>{

  return(
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <DivSearch style={{display: 'flex', justifyContent: 'center'}}>
      <Img src={searchIcon}/>
      <SearchInput type='text' placeholder='Cari Lokasi' onChange={(e)=>search(e.target.value)}
      />
    </DivSearch>
    </div>
  )
};
