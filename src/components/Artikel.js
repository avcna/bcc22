import styled from 'styled-components';
import {Grid} from '@mui/material';
import Article from '../components/ArtikelElement'
import { styled as makeStyle} from '@mui/styles';
import {ScrollMenu} from 'react-horizontal-scrolling-menu';
import '../App.css';

export const FixGrid = styled(Grid)`
  margin-right: 26px;
`;

const Artikel =()=>{
  return(
    <ScrollMenu className='hide-scbar'>
    <FixGrid container xs={6}>
      <Article/>
    </FixGrid>
    <FixGrid container xs={6}>
      <Article/>
    </FixGrid>
    </ScrollMenu>
  )
}

export default Artikel;
