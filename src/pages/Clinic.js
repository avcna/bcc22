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

export const Paging = styled(Pagination)`
  padding: 81px 165px 30px;
  text-align: center;

`;

const Clinic = ({id,name, phone_number, address, website})=>{

    const url = 'https://be0e-103-108-21-100.ngrok.io/clinic';
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
    const values = {Location: search}
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

    /*const searching = (name) => {

      const newClinic = clinic.filter((clinicss)=>clinicss.name==Location);
      setClinic(newClinic);
    }*/

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
    const {id, name, phone_number, address, website} = currentPosts;
    return <Card key={currentPosts.id} {...currentPosts}>
    <h5>{name}</h5>
    {phone_number} <br/>
    {address}
    <a target="_blank" href={website}> Lihat di map</a>
    </Card>
    })}

    <Paging
    postsPerPage={postsPerPage}
    totalPosts={clinic.length}
    paginate={paginate}
    />

    <Footer/>
    </section>
    </div>
  )
};

export default Clinic;
