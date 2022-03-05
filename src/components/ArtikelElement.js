import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {DivSearch,SearchInput} from './ClinicElement';
import styled from 'styled-components';

export const Content= styled(CardContent)`
  background-color: #C4C4C4;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const Actions= styled(CardActions)`
  background-color: #C4C4C4;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border:none;
  outline: none;
`;

export const CardPure= styled(Card)`
  border: none;
  outline:none;
`;

const card = (
  <React.Fragment>
    <Content sx={{ minHeight: 230}}>
      <Typography variant="h5" component="div">
        benevolent
      </Typography>
      <Typography variant="body2">
        well meaning and kindly. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's
      </Typography>
    </Content>
    <Actions>
      <Button size="small">Baca Selengkapnya</Button>
    </Actions>
  </React.Fragment>
);


export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 600, minHeight: 330,}}>
      <CardPure >{card}</CardPure>
      {/*variant="outlined"*/}
    </Box>
  );
}
