import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/petlink.png';

export const Nav = styled.nav`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 0.7rem calc((100vw - 1000px) / 2);
  padding-left:  3.5rem;
  padding-right: 2rem;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.8rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.125rem;
  position: static;

  &.active {
    font-weight: bold;
    color:#000;
  }

  &:hover{
    color:#FFB703;
  }
`;

export const NavLink2 = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.125rem;
  position: static;

  &.active {
    font-weight: bold;
    color:#000;
  }

  &:hover{
    color:white;
    text-decoration:none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5rem;
  @media screen and (max-width: 48rem) {
    display: none;
  }
`;

export const NavMenu2 = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5rem;
  margin-right: 1.75rem;
  justify-content: flex-end;
  width: 80px;
  @media screen and (max-width: 30rem) {
    display: none;
  }
`;

export const NavBrand = ()=>{
  return(
    <>
    <Navbar.Brand>
      <Link to="/">
      <img width='170px' className="img-responsive" src={Logo} alt="logo" />

      </Link>
    </Navbar.Brand>
    </>
  )
}
