import React from "react";
import {
  Nav,
  NavLink,
  NavLink2,
  NavMenu,
  NavMenu2,
  NavBtn,
  NavBtnLink,
  NavBrand,
} from "./NavbarElements";
import styled from "styled-components";
import { useAuth } from "../config/Auth";

export const Navbrand = styled(NavBrand)`
  margin-left: 124px;
`;

export const Btn = styled.button`
  border-radius: 25px;
  color: #000;
  background-color: #ffb703;
  border: none;
  font-family: Poppins;

  &:hover {
    color: white;
  }
`;

export const BtnLogout = styled.button`
  color: #000;
  border: none;
  font-family: Poppins;
  background-color: #fff;
  font-size: 1.125rem;

  &:hover {
    color: #ffb703;
  }
`;

const Navbar = () => {
  const { setAndGetTokens } = useAuth();
  const handleLogout = () => {
    setAndGetTokens();
    localStorage.clear();
  };
  return (
    <>
      <Nav>
        <Navbrand />
        <NavMenu>
          <NavLink className="nav-link" to="/Home">
            Beranda
          </NavLink>
          <NavLink className="nav-link" to="/Konsultasi">
            Mulai Konsultasi
          </NavLink>
          <NavLink className="nav-link" to="/Klinik">
            Klinik Hewan Terdekat
          </NavLink>
          <NavLink className="nav-link" to="/Artikel">
            Artikel
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavMenu2>
          {localStorage.getItem("token") === null ? (
            <>
              <NavLink className="nav-link nav-link2" to="/Login">
                Login
              </NavLink>
              <Btn>
                <NavLink2 to="/Signup">Signup</NavLink2>{" "}
              </Btn>
            </>
          ) : (
            <BtnLogout onClick={handleLogout}>Logout</BtnLogout>
          )}
        </NavMenu2>
      </Nav>
    </>
  );
};

export default Navbar;
