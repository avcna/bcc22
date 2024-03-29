import { DivSearch, Img, SearchInput } from "../components/ClinicElement";
import searchIcon from "../images/magnifying-glass.png";
import Footer from "../components/Footer";
import { Title } from "../components/Basic";
import { Article } from "../components/ArtikelElements";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { PaginationWrapper } from "./Clinic";
import { Paging } from "./Clinic";
import Loading from "../components/loading";
import { petlinkAPI } from "../config/api";
import { article } from "../data/article/article";

export const Button = styled.button`
  background-color: #ffb703;
  border-radius: 25px;
  border: none;
  outline: none;
  padding: 0.3rem 2rem;
  margin-right: 36px;
  margin-bottom: 24px;
  font-family: Poppins;
  font-size: 18px;
  line-height: 27px;
  align-items: center;
  letter-spacing: 0.2px;
  color: #023047;
  box-shadow: 4px 8px 10px 0px #00000040;

  &:hover {
    box-shadow: none;
  }
`;

export const Kategori = styled.div`
  padding: 3.875rem 133px 0;
`;

export const ArticleTitle = styled.p`
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
  color: #ffb703;
`;

const filterButton = [
  "Kucing",
  "Kelinci",
  "Hamster",
  "Ikan",
  "Reptil",
  "Perawatan",
  "Kesehatan",
  "Penanganan Pertama",
  "Burung",
];

const Articles = () => {
  const [articles, setArticle] = useState(article);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

  const [search, setSearch] = useState("");
  // const [load, setLoad] = useState(true);

  // const fetchArticle = async () => {
  //   setLoad(true);

  //   try {
  //     const response = await petlinkAPI.get("/article").then((res) => {
  //       setArticle(res.data.data);
  //     });
  //     setLoad(false);
  //   } catch (error) {
  //     setLoad(false);
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchArticle();
  // }, []);

  function handle(event) {
    setSearch(event.target.value);
    console.log(search);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handlePost();
      console.log("do validate");
    }
  };

  const handlePost = async () => {
    const values = { category: search };
    try {
      const response = await petlinkAPI.post("/article/category", values).then((res) => {
        setArticle(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const clicked = (kategori) => {
    // tambahkan async pada function

    // const kategori = data;
    // const values = { category: kategori };
    // try {
    //   const response = await petlinkAPI.post("/article/category", values).then((res) => {
    //     setArticle(res.data.data);
    //   });
    // } catch (error) {
    //   console.log(error);
    // }

    const newData = article.filter((data) => {
      return data.kategori === kategori;
    });

    setArticle(newData);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="nav-div">
        <Navbar />
      </div>
      <section>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DivSearch style={{ display: "flex", justifyContent: "center" }}>
            <Img src={searchIcon} />
            <SearchInput
              type="text"
              placeholder="Cari Artikel"
              onKeyDown={handleKeyDown}
              onChange={(event) => {
                handle(event);
              }}
            />
          </DivSearch>
        </div>
        <Kategori>
          <Title>Kategori</Title>
          {filterButton.map((button, i) => {
            return (
              <Button
                key={i}
                onClick={() => {
                  clicked(button);
                }}
              >
                {button}
              </Button>
            );
          })}
        </Kategori>
      </section>
      <section>
        <Kategori>
          <Title>Artikel Terkini</Title>
        </Kategori>
        {/* {load && <Loading></Loading>} */}
        {currentPosts.map((currentPosts, i) => {
          const { id, kategori, foto, judul, deskripsi } = currentPosts;
          return (
            <Article
              key={i}
              content={deskripsi}
              image={foto}
              category={kategori}
              title={judul}
              id={id}
            />
          );
        })}

        <PaginationWrapper>
          <Paging postsPerPage={postsPerPage} totalPosts={articles.length} paginate={paginate} />
        </PaginationWrapper>

        <Footer />
      </section>
    </>
  );
};

export default Articles;
