import {DivSearch,Img,SearchInput, Klinik} from '../components/ClinicElement';
import searchIcon from '../images/magnifying-glass.png';
import Footer from '../components/Footer';
import {Section, Title} from '../components/Basic';
import {ArticleCard} from '../components/ArtikelElements';
import styled from 'styled-components';
import {useEffect, useState} from "react";
import Axios from 'axios';
import Navbar from '../components/Navbar';
import '../App.css';
import Pagination from '../components/pagination';
import {PaginationWrapper} from './Clinic';
import {Paging} from './Clinic';

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
  color: #023047;
  box-shadow: 4px 8px 10px 0px #00000040;

  &:hover{
    box-shadow: none;
  }
`;

export const Kategori = styled.div`
  padding: 3.875rem 133px 0;
`;

export const ArticleTitle = styled.p`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
  color:#FFB703;
`;

export const Content = styled.p`
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.20000000298023224px;
text-align: left;
color: white;
`;



const Articles =({id, title, content, image, category})=>{

  const url = 'https://1990-103-108-21-98.ngrok.io/article/search';
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
  }
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
    <div className='nav-div'>
    <Navbar />
    </div>
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
        {currentPosts.map((currentPosts)=>{
        const {id, title, content, image, category} = currentPosts;
        return <ArticleCard key={currentPosts.id} {...currentPosts}>
        <Content>{category}</Content>
        <img src={image}/>
          <ArticleTitle>{title}</ArticleTitle>
          <Content>{content.substring(0,400)}...
          </Content>
        </ArticleCard>
      })}

      <PaginationWrapper>
            <Paging
              postsPerPage={postsPerPage}
              totalPosts={article.length}
              paginate={paginate}
            />
          </PaginationWrapper>

      <Footer/>

      </section>
    </>
  )
}

export default Articles;
