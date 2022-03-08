import {DivSearch,Img,SearchInput, Klinik} from '../components/ClinicElement';
import searchIcon from '../images/magnifying-glass.png';
import Footer from '../components/Footer';
import {Section, Title} from '../components/Basic';
import {ArticleCard} from '../components/ArtikelElements';
import styled from 'styled-components';
import {useEffect, useState} from "react";
import Axios from 'axios';

export const Button = styled.button`
  background-color: #FFB703;
  border-radius:25px;
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
  color: white;
  box-shadow: 4px 8px 10px 0px #00000040;

  &:hover{
    box-shadow: none;
  }
`;

export const Kategori = styled.div`
  padding: 3.875rem 133px 0;
`;


const Articles =({id, title})=>{

  const url = 'https://1eb9-117-103-68-38.ngrok.io/clinic';
  const [search,setSearch]= useState('');
  const [load,setLoad]= useState(true);

  const fetchArticle = async () =>{
    setLoad(true);

  try {
    const response = await Axios.get(url
    ).then(res=>{
      setArticle(res.data.data);
    });
    setLoad(false);
  }
  catch (error) {
    setLoad(false);
    console.log(error);
  }
  }

  useEffect(()=> {fetchArticle();
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
  const values = {title: search}
  try {
    const response = await Axios.post(url,values
    ).then(res=>{
      setArticle(res.data.data);
    });
  }
  catch (error) {
    console.log(error);
    console.log(search);
  } console.log(values);

  }

  const seeMore=(id)=>{

  }

  const [article,setArticle] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = article.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return(
    <>
      <section>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <DivSearch style={{display: 'flex', justifyContent: 'center'}}>
        <Img src={searchIcon}/>
        <SearchInput type='text' placeholder='Cari Artikel'/>
      </DivSearch>
      </div>
      <Kategori>
        <Title>Kategori</Title>
        <Button value='kucing'>Kucing</Button>
        <Button value='anjing'>Anjing</Button>
        <Button value='kelinci'>Kelinci</Button>
        <Button value='hamster'>Hamster</Button>
        <Button value='ikan'>Ikan</Button>
        <Button value='reptil'>Reptil</Button>
        <Button value='perawatan'>Perawatan</Button>
        <Button value='kesehatan'>Kesehatan</Button>
        <Button value='penanganan pertama'>Penanganan Pertama</Button>
        <Button value='burung'>Burung</Button>
      </Kategori>
      </section>
      <section>
      <Kategori>
        <Title>Artikel Terkini</Title>
      </Kategori>
        <ArticleCard>
          test
        </ArticleCard>
        <ArticleCard>
          test
        </ArticleCard>
        <ArticleCard>
          test
        </ArticleCard>
      <Footer/>
      </section>

    </>
  )
}

export default Articles;
