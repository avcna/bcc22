import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Input,
  Wrapper,
  Biodata,
  DocterCard,
  Subtn,
  Label,
} from "../components/konsultasiElement";
import Mandiri from "../images/mandiri2.png";
import Bni from "../images/bni.png";
import { useAuth } from "../config/Auth";
import { Form, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { petlinkAPI } from "../config/api";

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
  border: 2px solid #fff;
  outline: none;
  background-color: #ffb703;
  border-radius: 20px;
  font-family: Poppins;
  padding: 5px 20px;
  margin-top: 25px;
  color: white;
`;

export const Harga2 = styled.button`
  border: 2px solid #fff;
  outline: none;
  background-color: #ffb703;

  border-radius: 20px;
  font-family: Poppins;
  padding: 5px 20px;
  margin-top: 25px;

  &:focus {
    background-color: #fccf5d;
  }
`;

export const BioHewan = () => {
  const [form, setForm] = useState({
    nama_hewan: "",
    umur_hewan: "",
    jenis_kelamin: "",
    jenis_hewan: "",
    warna_hewan: "",
  });

  const handlePost = async () => {
    try {
      const response = await petlinkAPI.post("/biodata", { ...form });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <Biodata>
        <form onSubmit={handlePost}>
          <Label>Jenis Hewan</Label>
          <br />
          <Input
            placeholder="Masukkan jenis"
            onChange={(e) =>
              setForm(() => ({
                ...form,
                jenis_hewan: e.target.value,
              }))
            }
          />
          <br />
          <Label>Nama Hewan</Label>
          <br />
          <Input
            placeholder="Masukkan nama"
            onChange={(e) =>
              setForm(() => ({
                ...form,
                nama_hewan: e.target.value,
              }))
            }
          />
          <br />
          <Label>Usia</Label>
          <br />
          <Input
            placeholder="Masukkan usia"
            onChange={(e) =>
              setForm(() => ({
                ...form,
                umur_hewan: e.target.value,
              }))
            }
          />
          <br />
          <Label>Jenis Kelamin</Label>
          <br />
          <Input
            placeholder="Masukkan jenis kelamin"
            onChange={(e) =>
              setForm(() => ({
                ...form,
                jenis_kelamin: e.target.value,
              }))
            }
          />
          <br />
          <Label>Warna Hewan</Label>
          <br />
          <Input
            placeholder="Masukkan warna"
            onChange={(e) =>
              setForm(() => ({
                ...form,
                warna_hewan: e.target.value,
              }))
            }
          />
          <br />
          <Harga type="submit">kirim</Harga>
        </form>
      </Biodata>
    </Wrapper>
  );
};

export const Dokter = ({ passData }) => {
  const [dokter, setDokter] = useState([]);
  const [dokterSelected, setDokterSelected] = useState([]);

  const fetchDokter = async () => {
    try {
      const response = await petlinkAPI.get("/doctor").then((res) => {
        setDokter(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const clicked = async (id) => {
    const now = id;
    const values = { id: now };
    try {
      const response = await petlinkAPI
        .post("/doctor/search", values)
        .then((res) => {
          setDokterSelected(res.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDokter();
  }, []);

  return (
    <>
      <Wrapper style={{ margin: "auto 100px" }}>
        <Row gutter={[64, 24]}>
          {dokter.map((dokter) => {
            const {
              id,
              name,
              email,
              jadwal,
              lokasi_kerja,
              meet,
              picture,
              price,
              pengalaman,
            } = dokter;
            return (
              <Col key={dokter.id} span={12}>
                <DocterCard key={dokter.id} {...dokter}>
                  <center>
                    <Img
                      width="400px"
                      src={picture}
                      style={{ marginBottom: "30px" }}
                    />
                  </center>
                  <NamaDok>{name}</NamaDok>
                  <p style={{ color: "#fff" }}>Jadwal Praktik : {jadwal}</p>
                  <p style={{ color: "#fff" }}>
                    Tempat Praktik : {lokasi_kerja}
                  </p>
                  <p style={{ color: "#fff" }}>
                    Pengalaman Kerja : {pengalaman} tahun
                  </p>
                  <center>
                    <Harga
                      id={id}
                      onClick={(value) => {
                        clicked(id);
                        passData(id);
                      }}
                    >
                      {price}000/Jam
                    </Harga>
                  </center>
                </DocterCard>
              </Col>
            );
          })}
        </Row>
      </Wrapper>
    </>
  );
};

{
  /*------------------------------------------pembayaran---------------------------------------------*/
}

export const Pembayaran = () => {
  const { authToken } = useAuth();
  const handlePost = async (values) => {
    const formData = new FormData();
    formData.append("file", values.file.file.originFileObj);
    console.log(values);
    try {
      const response = await petlinkAPI
        .post("/upload", formData)
        .then((res) => {
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

  return (
    <Wrapper>
      <DocterCard>
        <JudulPembayaran>Detail Pembayaran</JudulPembayaran>
        <Row>
          <Col span={12}>
            <P> Biaya Konsultasi</P>
          </Col>
          <Col span={12}>
            <P>Rp. 30000</P>
          </Col>
        </Row>
        <JudulPembayaran>Rekening Tujuan</JudulPembayaran>
        <Row>
          <Col span={12}>
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                borderRadius: "20px",
                height: "50px",
                width: "80%",
                display: "flex",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <img width="100px" src={Mandiri} />
              <br />
            </div>
            <An style={{ margin: "0 auto" }}>
              PT Peduli Hewan
              <br />
              no : 123456789
            </An>
          </Col>
          <Col span={12}>
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                borderRadius: "20px",
                height: "50px",
                width: "80%",
                display: "flex",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <img width="100px" src={Bni} />
              <br />
            </div>
            <An style={{ margin: "0 auto" }}>
              PT Peduli Hewan
              <br />
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
  );
};

export const Konfirmasi = ({ id }) => {
  const [link, setLink] = useState([]);
  const fetchLinkDokter = async () => {
    try {
      const response = await petlinkAPI.get(`/doctor/${id}`).then((res) => {
        setLink(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLinkDokter();
  }, []);

  return (
    <Wrapper>
      <DocterCard>
        <JudulPembayaran>
          Kamu telah berhasil melakukan
          <br />
          reservasi konsultasi!
          <br />
        </JudulPembayaran>
        Tautan konsultasi :{" "}
        <a key={link.id} target="_blank" href={link.meet}>
          {link.meet}
        </a>
      </DocterCard>
    </Wrapper>
  );
};

export const Jam = () => {
  const [jam, setJam] = useState();
  const { authToken } = useAuth();

  const clicked = async (value) => {
    const now = value;
    const values = { jam_konsultasi: now };
    try {
      const response = await petlinkAPI
        .post("/order/time", values, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((res) => {
          setJam(res.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <Harga2
        onClick={(value) => {
          clicked("10.00-11.00");
        }}
      >
        10.00-11.00
      </Harga2>
      <Harga2
        onClick={(value) => {
          clicked("13.00-14.00");
        }}
      >
        13.00-14.00
      </Harga2>
    </Wrapper>
  );
};
