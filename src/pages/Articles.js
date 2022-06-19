import { DivSearch, Img, SearchInput } from "../components/ClinicElement";
import searchIcon from "../images/magnifying-glass.png";
import Footer from "../components/Footer";
import { Title } from "../components/Basic";
import { Style1 } from "../components/ArtikelElements";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../components/Navbar";
import "../App.css";
import Pagination from "../components/pagination";
import { PaginationWrapper } from "./Clinic";
import { Paging } from "./Clinic";
import Loading from "../components/loading";

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

const Articles = ({ style1 }) => {
  const urlpost = "http://localhost:8080/article/category";
  const urlget = "https://rebuild-intern-bcc.herokuapp.com/article";
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(true);

  const fetchArticle = async () => {
    setLoad(true);

    try {
      const response = await Axios.get(urlget).then((res) => {
        setArticle(res.data.data);
      });
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

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
      const response = await Axios.post(urlpost, values).then((res) => {
        setArticle(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const clicked = async (data) => {
    const now = data;
    const values = { category: now };
    try {
      const response = await Axios.post(urlpost, values).then((res) => {
        setArticle(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [article, setArticle] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = article.slice(indexOfFirstPost, indexOfLastPost);

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
          <Button
            onClick={(value) => {
              clicked("kucing");
            }}
          >
            Kucing
          </Button>
          <Button
            onClick={(value) => {
              clicked("anjing");
            }}
          >
            Anjing
          </Button>
          <Button
            onClick={(value) => {
              clicked("kelinci");
            }}
          >
            Kelinci
          </Button>
          <Button
            onClick={(value) => {
              clicked("hamster");
            }}
          >
            Hamster
          </Button>
          <Button
            onClick={(value) => {
              clicked("ikan");
            }}
          >
            Ikan
          </Button>
          <Button
            onClick={(value) => {
              clicked("reptil");
            }}
          >
            Reptil
          </Button>
          <Button
            onClick={(value) => {
              clicked("perawatan");
            }}
          >
            Perawatan
          </Button>
          <Button
            onClick={(value) => {
              clicked("kesehatan");
            }}
          >
            Kesehatan
          </Button>
          <Button
            onClick={(value) => {
              clicked("penanganan pertama");
            }}
          >
            Penanganan Pertama
          </Button>
          <Button
            onClick={(value) => {
              clicked("burung");
            }}
          >
            Burung
          </Button>
        </Kategori>
      </section>
      <section>
        <Kategori>
          <Title>Artikel Terkini</Title>
        </Kategori>
        {load && <Loading></Loading>}
        {currentPosts.map((currentPosts) => {
          const { id, title, content, image, category } = currentPosts;
          return <Style1 key={currentPosts.id} {...currentPosts}></Style1>;
        })}

        <PaginationWrapper>
          <Paging
            postsPerPage={postsPerPage}
            totalPosts={article.length}
            paginate={paginate}
          />
        </PaginationWrapper>

        <Footer />
      </section>
    </>
  );
};

export default Articles;
