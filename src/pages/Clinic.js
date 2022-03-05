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

const Clinic = ({Name, Phone_Number, Address, Website})=>{

    const url = 'https://be0e-103-108-21-100.ngrok.io/clinic';
    /*https://a1b9-103-108-23-25.ngrok.io/clinic*/
    /*http://jsonplaceholder.typicode.com/users*/
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
    /*setClinic(temp);*/
    if (e.key === 'Enter') {
      handlePost();


      console.log('do validate');
      /*searching(nama);*/

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
    const [temp, setTemp] = useState([]);
    const [nama, setNama] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = clinic.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const searching = (name) => {

      const newClinic = clinic.filter((clinicss)=>clinicss.name==Location);
      setClinic(newClinic);
    }


  /*const fetchData = () => {
  return fetch("http://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setClinic(data));}

  useEffect(() => {
          fetchData();
        }, []);*/

    const fetchTemp = () => {
    return fetch("http://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setTemp(data));}

    useEffect(() => {
            fetchTemp();
            }, []);

    return(

    <div>
    <section>
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <DivSearch style={{display: 'flex', justifyContent: 'center'}}>
      <Img src={searchIcon}/>
      <SearchInput type='text' placeholder='Cari Lokasi' nama={Name} onKeyDown={handleKeyDown} onChange={(event)=>{
        handle(event)
        }
        /*setNama(event.target.value)*/
      }
      />
    </DivSearch>
    </div>
    </section>
    <section>
    <Title2>Daftar Klinik Hewan</Title2>

    {load && (<Loading></Loading>)}

    {currentPosts.map((currentPosts)=>{
    const {Name, Phone_Number, Address, Website} = currentPosts;
    return <Card key={currentPosts.id} {...currentPosts}>
    <h5>{Name}</h5>
    {Phone_Number} <br/>
    {Address}
    <a target="_blank" href={Website}> Lihat di map</a>
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
