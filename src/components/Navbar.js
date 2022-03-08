import React from 'react';
import {
Nav,
NavLink,
NavMenu,
NavMenu2,
NavBtn,
NavBtnLink,
NavBrand
} from './NavbarElements';
import styled from 'styled-components';

export const Navbrand = styled(NavBrand)`
	margin-left: 124px;
`;

const Navbar = () => {
return (
	<>
	<Nav>
	<Navbrand/>
		<NavMenu>
		<NavLink className='nav-link' to='/Home'>
			Beranda
		</NavLink>
    <NavLink className='nav-link' to='/Konsultasi'>
			Mulai Konsultasi
		</NavLink>
    <NavLink className='nav-link' to='/Klinik'>
			Klinik Hewan Terdekat
		</NavLink>
    <NavLink className='nav-link' to='/Artikel'>
			Artikel
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
			<NavMenu2>
		<NavLink className='nav-link nav-link2' to='/Login'>
			Login
		</NavLink>
		<NavLink className='nav-link nav-link2' to='/Signup'>
			Signup
		</NavLink>
		</NavMenu2>
	</Nav>
	</>
);
};

export default Navbar;
