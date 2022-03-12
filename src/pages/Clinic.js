import {Card,
  DivSearch,
  Img,
  SearchInput,
  Klinik,
  ClinicName}
  from '../components/ClinicElement';
import {Section,Title} from '../components/Basic';
import styled from 'styled-components';
import Footer from '../components/Footer';
import {useEffect, useState} from "react";
import searchIcon from '../images/magnifying-glass.png';
import Pagination from '../components/pagination';
import Axios from 'axios';
import Loading from '../components/loading';
import '../App.css';
import Phone from '../images/phone.png';
import Map from '../images/map.png';
import Navbar from '../components/Navbar';

export const Title2 = styled(Title)`
  padding: 81px 165px 30px;
`;

export const Title3 = styled(Title)`
  padding: 81px 165px 30px;
  color:red;
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

export const Icon = styled.img`
   margin-right: 21px;
   height: 17px;
`;

export const PaginationWrapper = styled.div`=
  justify-content: center;
  display: flex;
  margin: 5rem 0 4rem;
`;

const Clinic = ({id,name, phone_number, address, link_google_maps})=>{

    const url = 'https://6017-103-108-21-76.ngrok.io/clinic';
    const urlp = 'https://6017-103-108-21-76.ngrok.io/clinic/search';
    const [search,setSearch]= useState('');
    const [load,setLoad]= useState(true);
    const [isEmpty, setEmpty]= useState(false);

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
    }

    const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlePost();
    }
  }

  const handlePost = async ()=>{
    const values = {location: search}
    try {
      const response = await Axios.post(urlp,values
      ).then(res=>{
        setClinic(res.data.data);
      });
    }
    catch (error) {
      console.log(error);
    }

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
    <div className='nav-div'>
    <Navbar />
    </div>
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
    return <Card key={currentPosts.id} {...currentPosts}>
    <ClinicName>{name}</ClinicName>
    <Icon src={Phone}/>
    {phone_number} <br/>
    <Icon src={Map}/>
    {address}<br/>
    <A target="_blank" href={link_google_maps}> Lihat di map</A>
    </Card>
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
