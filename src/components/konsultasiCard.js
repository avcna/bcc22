import {Row,Col} from 'antd';
import {useEffect, useState} from "react";
import Axios from 'axios';
import styled from 'styled-components';
import {Input,
        Wrapper,
        Biodata,
        DocterCard,
        Subtn,
        Label} from '../components/konsultasiElement';

export const NamaDok = styled.h3`
  font-family: Mulish;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.10000000149011612px;
  text-align: center;
  color: #fff;
`;

export const Img = styled.img`
  border-radius: 20px;
`;

export const JudulPembayaran = styled.p`
  font-family: Mulish;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.10000000149011612px;
  text-align: center;
  color: white;
`;

export const BioHewan = ()=>{
  return(
    <Wrapper>
    <Biodata>
      <form>
        <Label>Jenis Hewan</Label><br/>
        <Input placeholder='Masukkan nama'/><br/>
        <Label>Nama Hewan</Label><br/>
        <Input placeholder='Masukkan nama'/><br/>
        <Label>Usia</Label><br/>
        <Input placeholder='Masukkan nama'/><br/>
        <Label>Jenis Kelamin</Label><br/>
        <Input placeholder='Masukkan nama'/><br/>
        <Label>Warna Hewan</Label><br/>
        <Input placeholder='Masukkan nama'/><br/>
      </form>
    </Biodata>
  </Wrapper>
  )
}

export const Dokter =({id, name, email, jadwal, lokasi_kerja, meet, picture})=>{
  const [dokter, setDokter]= useState([]);
  const urlget='https://6017-103-108-21-76.ngrok.io/doctor';

  const fetchDokter = async () =>{
  try {
    const response = await Axios.get(urlget
    ).then(res=>{
      setDokter(res.data.data);
    });
  }
  catch (error) {
    console.log(error);
  }
  }

  useEffect(()=> {fetchDokter();
  },[]);

  return(
    <>
    <Wrapper>
    <Row gutter={24}>
    {dokter.map((dokter)=>{
      const {id, name, email, jadwal, lokasi_kerja, meet, picture} = dokter;
      return <Col span={12}>
      <DocterCard key={dokter.id} {...dokter}>
      <Img width="400px" src={picture}/>
      <NamaDok>{name}</NamaDok>
      {jadwal} <br/>
      {lokasi_kerja}
      </DocterCard>
      </Col>
    })}

      </Row>
      </Wrapper>
    </>
  )
}

export const Pembayaran = () =>{
  return(
    <Wrapper>
    <DocterCard>
      <JudulPembayaran>
        Detail Pembayaran
      </JudulPembayaran>
      <Row>
        <Col>
          <p>Biaya Konsultasi</p>
        </Col>
        <Col>
          <p>Rp. 5000</p>
        </Col>
      </Row>
    </DocterCard>
    </Wrapper>
  )
}

export const Konfirmasi =()=>{
  return(
    <Wrapper>
    <DocterCard>
      <JudulPembayaran>
        Kamu telah berhasil melakukan<br/>reservasi konsultasi!
      </JudulPembayaran>

    </DocterCard>
    </Wrapper>
  )
}
