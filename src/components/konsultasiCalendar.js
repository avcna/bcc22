import { Calendar, Alert } from 'antd';
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import '../App.css'
import Axios from 'axios';
import {useAuth} from '../config/Auth';
import {useState} from 'react';

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

const Date=()=> {
  const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const onSelect = (value) => {
    {/*this.setState({
      value,
      selectedValue: value,
    });*/}
    setSelectedValue(value);
  };

  {/*onPanelChange = value => {
    this.setState({ value });
  };*/}

  const onPanelChange = (value) => {
    setValue(value);
  }


    const { authToken } = useAuth();
    const handlePost = async ()=>{
        const values = {tgl_pesan: value}
        try {
          const response = await Axios.post('https://6017-103-108-21-76.ngrok.io/order/time',values
          ).then(res=>{
            selectedValue(res.data.data);
          });
        }
        catch (error) {
          console.log(error);
        }


    return (
      <>
        <Alert2
          message={`Anda memilih tanggal: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <Cal value={value} onSelect={onSelect} onPanelChange={onPanelChange} handlePost={handlePost}/>
      </>
    );
  }
}

export default Date;
