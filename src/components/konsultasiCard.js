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
import {useAuth} from '../config/Auth';
import { Form, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

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

export const Harga = styled.button`
  border: 4px solid #fff;
  outline: none;
  background-color:#FFB703;
  border-radius: 20px;
  font-family: Poppins;
  padding: 5px 10px;
  margin-top: 25px;
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
      {lokasi_kerja}<br/>
      <center><Harga>Rp 300.000/Jam</Harga></center>
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
  const { authToken } = useAuth();
  const handlePost = async (values) => {
    const formData = new FormData();
    formData.append("file", values.file.file.originFileObj);
    console.log(values);
    try {
      const response = await Axios.post(
        "https://6017-103-108-21-76.ngrok.io/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      ).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

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
              no : 123456789
            </An>
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
            no : 123456789
          </An>
        </Col>
      </Row>
      <Form onFinish={handlePost}>
          <Form.Item name="file">
            <Upload name="file" listType="picture" customRequest={dummyRequest}>
            {/*accept=".jpeg"*/}
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
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
