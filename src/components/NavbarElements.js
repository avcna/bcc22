import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/cat.png';

export const Nav = styled.nav`
  background-color: #ADD8E6;
  display: flex;
  justify-content: space-between;
  padding: 0.7rem calc((100vw - 1000px) / 2);
  padding-left:  3.5rem;
  padding-right: 2rem;
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-end; */
  /* position: fixed; */
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.8rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.125rem;
  position: static;

  &.active {
    color: #658F9C;
  }

  &:hover{
    color:#cbecf7;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5rem;
  /* Second Nav */
  margin-right: 1.75rem;
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 48rem) {
    display: none;
  }
`;

export const SubNav = styled.section`
  height: 4.088rem;
  background-color: #f8f4fc;
`;

export const NavBrand = ()=>{
  return(
    <>
    <Navbar.Brand>
      <Link to="/">
      <img width='45px' className="img-responsive" src={Logo} alt="logo" />

      </Link>
    </Navbar.Brand>
    </>
  )
}
