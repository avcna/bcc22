import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import React, { useState } from 'react';
import {useAuth} from '../config/Auth';
import Logo from '../images/petlink.png';
import Footer from '../components/Footer';


export const FormWrapper = styled.section`
  width: 806px;
  border-style: solid;
  border-width:5px;
  border-radius: 50px;
  border-color: #023047;
  margin : 3rem 0;
  padding: 4rem 0;
`;

export const Wrapper = styled.section`
  display:flex;
  justify-content: center;
  margin-bottom: 136px;
`;

export const Img = styled.img`
  margin: 30px 0 25px;
`;

export const Label = styled.label`
  font-family: Mulish;
  font-weight: 700;
  font-size: 16px;
  color:#023047;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.10000000149011612px;
  text-align: center;
  margin-bottom: 7px;
  margin-left: 110px;
`;

export const Input = styled.input`
  border-radius: 50px;
  font-family: Mulish;
  width:630px;
  border-color:#023047;
  padding: 10px 30px;
  border-width:2px;
  margin-bottom: 14px;
  margin-top:0;
`;

export const Subtn = styled.button`
  border-radius:25px;
  background-color:#FFB703;
  color: #373F41;
  font-family:Mulish;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.10000000149011612px;
  text-align: center;
  width: 399px;
  border-style:none;
  margin-top:32px;
`;

export const Title = styled.p`
  font-family: Poppins;
  font-weight: 400;
  color: #023047;
  font-size:28px;
  line-height:42px;
  letter-spacing: 0.2px;
  justify-content: center;
`;

export const P = styled.p`
  margin-top: 15px;
  justify-content: center;
`;

const Login = () => {
    const { setAndGetTokens } = useAuth();
    const navigate = useNavigate();
    const urlpl='https://e68e-103-108-21-95.ngrok.io/user/login';
    const urlgl='https://e68e-103-108-21-95.ngrok.io/user';
  	const [forms, setForms] = useState({ email :'', password :'' });
  	const [isError, setIsError] = useState({ status: false, message: '' });
  	const handleLogin = async (e) => {
  		e.preventDefault();

  		try {
  			const loginResponse = await Axios.post(urlpl,{
  			...forms,
  			});
        console.log(loginResponse);

  			if (loginResponse.data.success) {
  				const token = loginResponse.data.data.token;
  				const currentUser = await Axios.get(urlgl,{
  					headers: {
  						Authorization : `Bearer ${token}`
  					},
  				});
  				const id = currentUser.data.data.id;
          setAndGetTokens(token,id);
  				navigate('/', {replace:true});
  			}

  		} catch (error) {
  			setIsError((isError) => ({
  				status : true,
  				message : 'error while try to log in',
  			}));
  		}
  	};

  return(
    <>
    <center><Img width='280px' className="img-login" src={Logo} alt="logo" /></center>
    <Wrapper>
    <FormWrapper>
    <Title>Login</Title>
      <form onSubmit={handleLogin}>
        <Label>Email</Label><br/>
        <center><Input type='email' placeholder='Masukkan email'
          onChange={(e) =>
					       setForms(() => ({
						             ...forms, email: e.target.value }))}
        /><br/></center>
        <Label>Password</Label><br/>
        <center><Input type='password' placeholder='Masukkan password'
          onChange={(e) =>
            setForms(() => ({
              ...forms, password: e.target.value }))}
        /><br/></center>
        <center><Subtn type='submit'>Login</Subtn></center>
      </form>
      <P>Belum mempunyai akun?<Link to='/Signup'>Signup</Link></P>
    </FormWrapper>
    </Wrapper>
    <Footer/>
    </>
  )
}

export default Login;
