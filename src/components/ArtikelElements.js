import styled from "styled-components";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

export const ArticleCard = styled.div`
  background-color: #023047;
  border-radius: 25px;
  padding: 55.79px;
  margin: 0 133px 1.5rem;
  color: white;
  text-align: center;
`;

export const CarItem = styled.div`
  margin: 0 12rem;
  background-color: #023047;
  padding: 2rem 6rem;
`;

export const Kategori = styled.div`
  padding: 3.875rem 133px 0;
`;

export const ImgArticel = styled.img`
  border-radius: 20px;
`;

export const ArticleTitle = styled.div`
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
  color: #ffb703;
  margin-bottom: 16px;
`;

export const Content = styled.p`
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: justify;
  color: #fff;
  padding-left: 20px;
`;

export const Category = styled.button`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  padding: 2px 8px;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 400;
  letter-spacing: 0.20000000298023224px;
  color: #fff;
  border: none;
  outline: none;
  margin-top: 15px;
  &:hover {
    cursor: auto;
  }
`;

export const Btn = styled.button`
  background-color: #ffb703;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 82%;
`;

export const Carouseli = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <CarItem>test</CarItem>
        </Carousel.Item>
        <Carousel.Item>
          <CarItem>test</CarItem>
        </Carousel.Item>
        <Carousel.Item>
          <CarItem>test</CarItem>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export const Style1 = ({ id, title, content, image, category }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <ArticleCard>
        {readMore ? (
          <>
            <ArticleTitle>{title}</ArticleTitle>
            <ImgArticel width="300px" src={image} />
            <Content>{content}</Content>
          </>
        ) : (
          <Row>
            <Col className="col-4">
              <ImgArticel width="300px" src={image} />
              <Category>{category}</Category>
            </Col>
            <Col>
              <ArticleTitle>{title}</ArticleTitle>
              <Content>{content.substring(0, 400)}...</Content>
            </Col>
          </Row>
        )}

        <Btn
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "Tampilkan lebih sedikit" : "Tampilkan lebih banyak"}
        </Btn>
      </ArticleCard>
    </>
  );
};
