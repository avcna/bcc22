import { Steps, Button, message } from 'antd';
import React from 'react';
import ReactDOM from 'react-router-dom';
import '../App.css';
import {Input,
        Wrapper,
        Biodata,
        DocterCard,
        Subtn,
        Label} from '../components/konsultasiElement';
import Navbar from '../components/Navbar';
import {Dokter} from '../components/konsultasiCard';

const { Step } = Steps;

const steps = [
  {
    title: 'Konsultasi sekarang',
    content: (
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
  ),
  },
  {
    title: 'Pilih Doktermu',
    content: (
      <Dokter/>
    ),
  },
  {
    title: 'Tentukan Jadwal',
    content: 'Last-content',
  },
  {
    title: 'Pembayaran',
    content: <Input/>,
  },
];

export const Konsultasi = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
    <div className='nav-div'>
      <Navbar />
    </div>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button  onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default Konsultasi;
