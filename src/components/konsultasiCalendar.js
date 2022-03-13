import { Calendar, Alert } from 'antd';

import React from 'react';
import styled from 'styled-components';
import '../App.css'
import Axios from 'axios';
import {useAuth} from '../config/Auth';
import {useState} from 'react';
import moment from 'moment-timezone';

export const Cal = styled(Calendar)`
  width : 500px;
  margin: 0 auto;
`;
export const Alert2 = styled(Alert)`
  width : 500px;
  margin: 0 auto;
  background-color: rgba(255, 183, 3, 0.3);
  border: none;
`;

const Date=()=>{
  const [value, setValue] = useState(moment('2022-03-13'));
  const [selectedValue, setSelectedValue] = useState(moment('2022-03-13'));

  const onSelect =  async(value) => {
    setValue(moment(value))
    setSelectedValue(moment(value));
    const outTime = moment(value).tz('Asia/Jakarta');
    const values = {tgl_pesan: outTime}
    try {
      const response = await Axios.post('https://17a2-103-108-23-19.ngrok.io/order/date',values,
      {
      headers: {
        Authorization : `Bearer ${authToken}`
      },}
      ).then(res=>{
        setSelectedValue(moment(res.data.data));
      });
      console.log(values);

    }

    catch (error) {
      console.log(error);
    }

  }


  const onPanelChange = (value) => {
    setValue(value);
  }


    const { authToken } = useAuth();
    return (
      <>
        <Cal onSelect={onSelect} onPanelChange={onPanelChange}/>
      </>
    );
  };

export default Date;
