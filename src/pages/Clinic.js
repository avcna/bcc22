import ClinicCard, { DivSearch, Img, SearchInput } from "../components/ClinicElement";
import { Section, Title } from "../components/Basic";
import styled from "styled-components";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import searchIcon from "../images/magnifying-glass.png";
import Pagination from "../components/pagination";
import Loading from "../components/loading";
import "../App.css";
import Navbar from "../components/Navbar";
import { petlinkAPI } from "../config/api";
import { clinic } from "../data/clinic/clinic";

export const Title2 = styled(Title)`
  padding: 81px 165px 30px;
`;

export const Title3 = styled(Title)`
  padding: 81px 165px 30px;
  color: red;
`;

export const Paging = styled(Pagination)`
  padding: 81px 165px 30px;
  text-align: center;
  color: red;
`;

export const Icon = styled.img`
  margin-right: 21px;
  height: 17px;
`;

export const PaginationWrapper = styled.div`=
  justify-content: center;
  display: flex;
  margin: 5rem 0 4rem;
`;

const Clinic = () => {
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(true);
  const [isEmpty, setEmpty] = useState(false);

  // const fetchClinic = async () => {
  //   setLoad(true);

  //   try {
  //     const response = await petlinkAPI.get("/clinic").then((res) => {
  //       setClinic(res.data.data);
  //     });
  //     setLoad(false);
  //   } catch (error) {
  //     setLoad(false);
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchClinic();
  // }, []);

  function handle(event) {
    setSearch(event.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handlePost();
    }
  };

  const handlePost = async () => {
    const values = { location: search };
    try {
      const response = await petlinkAPI.post("/clinic/search", values).then((res) => {
        setClinic(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [clinics, setClinic] = useState(clinic);
  const [nama, setNama] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = clinics.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="nav-div">
        <Navbar />
      </div>
      <section>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DivSearch style={{ display: "flex", justifyContent: "center" }}>
            <Img src={searchIcon} />
            <SearchInput
              type="text"
              placeholder="Cari Lokasi"
              onKeyDown={handleKeyDown}
              onChange={(event) => {
                handle(event);
              }}
            />
          </DivSearch>
        </div>
      </section>
      <section>
        <Title2>Daftar Klinik Hewan</Title2>
        {/* {load && <Loading></Loading>} */}
        {currentPosts.map((currentPosts) => {
          const { id, name, img, phone_number, address, link_google_maps } = currentPosts;
          return (
            <ClinicCard
              key={id}
              name={name}
              img={img}
              phone_number={phone_number}
              address={address}
              link_google_maps={link_google_maps}
            />
          );
        })}

        <PaginationWrapper>
          <Paging postsPerPage={postsPerPage} totalPosts={clinics.length} paginate={paginate} />
        </PaginationWrapper>

        <Footer />
      </section>
    </div>
  );
};

export default Clinic;
