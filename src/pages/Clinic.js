import {Card, DivSearch,Img,SearchInput, Klinik} from '../components/ClinicElement';
import {Section,Title} from '../components/Basic';
import styled from 'styled-components';
import Footer from '../components/Footer';
import {useEffect, useState} from "react";
import searchIcon from '../images/magnifying-glass.png';
import Pagination from '../components/pagination';
import Axios from 'axios';
import Loading from '../components/loading';
import '../App.css';

export const Title2 = styled(Title)`
  padding: 81px 165px 30px;
`;

export const A = styled.a`
  color: #FFB703;
  text-decoration: none;

  &:hover{
    color: #FFB703;
    text-decoration: underline;
  }
`;

export const Paging = styled(Pagination)`
  padding: 81px 165px 30px;
  text-align: center;
  color: red;

`;

export const PaginationWrapper = styled.div`=
  justify-content: center;
  display: flex;
  margin: 5rem 0 4rem;
`;

const Clinic = ({id,name, phone_number, address, link_google_maps})=>{

    const url = 'https://4304-118-99-79-63.ngrok.io/clinic';
    const [search,setSearch]= useState('');
    const [load,setLoad]= useState(true);

    const fetchClinic = async () =>{
      setLoad(true);

    try {
      const response = await Axios.get(url
      ).then(res=>{
        setClinic(res.data.data);
      });
      setLoad(false);
    }
    catch (error) {
      setLoad(false);
      console.log(error);
    }
  }

  useEffect(()=> {fetchClinic();
  },[]);

    function handle(event) {
      setSearch(event.target.value);
      console.log(search);
    }

    const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlePost();
      console.log('do validate');

    }
  }

  const handlePost = async ()=>{
    const values = {location: search}
    try {
      const response = await Axios.post(url,values
      ).then(res=>{
        setClinic(res.data.data);
      });
    }
    catch (error) {
      console.log(error);
      console.log(search);
    } console.log(values);

  }

    const [clinic,setClinic] = useState([]);
    const [nama, setNama] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = clinic.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return(

    <div>
    <section>
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <DivSearch style={{display: 'flex', justifyContent: 'center'}}>
      <Img src={searchIcon}/>
      <SearchInput type='text' placeholder='Cari Lokasi' onKeyDown={handleKeyDown} onChange={(event)=>{
        handle(event)
        }
      }
      />
    </DivSearch>
    </div>
    </section>
    <section>
    <Title2>Daftar Klinik Hewan</Title2>

    {load && (<Loading></Loading>)}

    {currentPosts.map((currentPosts)=>{
    const {id, name, phone_number, address, link_google_maps} = currentPosts;
    if (currentPosts.length==0){
      return(
        <p>Data tidak dapat ditemukan</p>
      )
    }
    else{
    return <Card key={currentPosts.id} {...currentPosts}>
    <h5>{name}</h5>
    {phone_number} <br/>
    {address}
    <A target="_blank" href={link_google_maps}> Lihat di map</A>
    </Card>}
  })}

    <PaginationWrapper>
          <Paging
            postsPerPage={postsPerPage}
            totalPosts={clinic.length}
            paginate={paginate}
          />
        </PaginationWrapper>

    <Footer/>
    </section>
    </div>
  )
};

export default Clinic;
