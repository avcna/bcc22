import styled from "styled-components";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { article } from "../data/article/article";

export const ArticleCard = styled.div`
  background-color: #023047;
  border-radius: 25px;
  padding: 36px 47px;
  margin: 0 133px 1.5rem;
  color: white;
  text-align: center;
  display: flex;
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
  width: 260px;
  heigth: 260px;
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
`;

export const Category = styled.p`
  font-size: 14px;
  font-family: Poppins;
  font-weight: 400;
  letter-spacing: 0.20000000298023224px;
  color: #fff;
  margin-top: 15px;
`;

export const Btn = styled.button`
  color: #fff;
  border: none;
  outline: none;
  font-weight: bold;
  background: none;
`;

export const Carouseli = () => {
  return (
    <>
      <Carousel>
        {article.slice(0, 3).map((data) => {
          const { id, kategori, foto, judul, deskripsi } = data;
          return (
            <Carousel.Item>
              <Article
                key={id}
                content={deskripsi}
                image={foto}
                category={kategori}
                title={judul}
                id={id}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export const Article = ({ id, title, content, image, category }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <ArticleCard>
        <ImgArticel src={image} />
        <div style={{ marginLeft: "20px" }}>
          <Category>{category}</Category>
          <ArticleTitle>{title}</ArticleTitle>
          <Content>{content.substring(0, 400)}...</Content>
          <NavLink to={`/Artikel/${id}`}>
            <Btn
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              Baca Selengkapnya
            </Btn>
          </NavLink>
        </div>
      </ArticleCard>
    </>
  );
};
