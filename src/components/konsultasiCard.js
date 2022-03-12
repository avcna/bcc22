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
import Mandiri from '../images/mandiri2.png';
import Bni from '../images/bni.png';

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

export const P = styled.p`
  color: #fff;
`;

export const An = styled(P)`
  font-size: 13px;
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

{/*------------------------------------------pembayaran---------------------------------------------*/}

export const Pembayaran = () =>{
  const [file,setFile]=useState();
  const handlePost = async ()=>{
  const values = {file: file}
  try {
    const response = await Axios.post('',values
    ).then(res=>{
      setFile(res.data);
    });
  }
  catch (error) {
    console.log(error);
  }
  }
  return(
    <Wrapper>
    <DocterCard>
    <JudulPembayaran>
      Detail Pembayaran
    </JudulPembayaran>
      <Row>
        <Col span={12}>
          <P> Biaya Konsultasi</P>
        </Col>
        <Col span={12}>
          <P>Rp. 5000</P>
        </Col>
        </Row>
        <JudulPembayaran>
          Rekening Tujuan
        </JudulPembayaran>
        <Row>
        <Col span={12}>
          <div style={{backgroundColor: "rgba(255,255,255,0.5)",
                      borderRadius: "20px",
                      height:'50px',
                      width:'80%',
                      display:'flex',
                      justifyContent:"center",
                      margin: '0 auto'}}>
            <img width='100px' src={Mandiri}/><br/>
          </div>
          <An style={{margin: '0 auto'}}>PT Peduli Hewan<br/>
          no : 123456789</An>
        </Col>
        <Col span={12}>
        <div style={{backgroundColor: "rgba(255,255,255,0.5)",
                    borderRadius: "20px",
                    height:'50px',
                    width:'80%',
                    display:'flex',
                    justifyContent:"center",
                    margin: '0 auto'}}>
          <img width='100px' src={Bni}/><br/>
          </div>
          <An style={{margin: '0 auto'}}>PT Peduli Hewan<br/>
          no : 123456789</An>
        </Col>
      </Row>
      <form onSubmit={handlePost}>
      <input type='file'/>
      <button type='submit' style={{color:'#000'}}>Kirim</button>
      </form>
    </DocterCard>
    </Wrapper>
  )
}

export const Konfirmasi =()=>{
  return(
    <Wrapper>
    <DocterCard>
      <JudulPembayaran>
        Kamu telah berhasil melakukan<br/>reservasi konsultasi!<br/>
      </JudulPembayaran>
        Tautan konsultasi : <a href=''>Test</a>
    </DocterCard>
    </Wrapper>
  )
}
