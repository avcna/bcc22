import { Steps, Button, message } from "antd";
import React from "react";
import ReactDOM from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
import {
  BioHewan,
  Dokter,
  Pembayaran,
  Konfirmasi,
  Jam,
} from "../components/konsultasiCard";
import Cal from "../components/konsultasiCalendar";
import Footer from "../components/Footer";
import { useState } from "react";

const { Step } = Steps;

export const Konsultasi = () => {
  const [link, setLink] = useState("");

  const passData = (link) => {
    setLink(link);
  };
  const steps = [
    {
      title: "Konsultasi sekarang",
      content: <BioHewan />,
    },
    {
      title: "Pilih Doktermu",
      content: <Dokter passData={passData} />,
    },
    {
      title: "Tentukan Jadwal",
      content: (
        <>
          <Cal />
          <Jam />
        </>
      ),
    },
    {
      title: "Pembayaran",
      content: <Pembayaran />,
    },
    {
      title: "Konfirmasi",
      content: <Konfirmasi id={link} />,
    },
  ];

  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div className="nav-div">
        <Navbar />
      </div>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
              background: "#FFF",
              borderColor: "#FFB703",
              fontFamily: "Poppins",
              color: "#FFB703",
            }}
            onClick={() => prev()}
          >
            Kembali
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button
            type="primary"
            style={{
              background: "#FFB703",
              border: "none",
              fontFamily: "Poppins",
            }}
            onClick={() => next()}
          >
            Selanjutnya
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            style={{
              background: "#FFB703",
              border: "none",
              fontFamily: "Poppins",
            }}
            onClick={() => message.success("Processing complete!")}
          >
            Selesai
          </Button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Konsultasi;
