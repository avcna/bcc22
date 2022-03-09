import {FormWrapper,
  Wrapper,
  Section,
  Label,
  Input,
  Subtn,
  Title,
  P
} from './Login';
import { NavLink as Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import React, { useState } from 'react';


const Signup = () => {
  const urlps='';
  const urlpl='';
  const urlgl='';
	const navigate = useNavigate();
	const [forms, setForms] = useState({ name:'', email :'', password:'', username :'', });
	const [isError, setIsError] = useState({ status: false, message: '' });
	const handleSignup = async (e) => {
		e.preventDefault();
		try {
			const registerResponse = await Axios.post(urlps,{
				...forms,
			});

			if (registerResponse.data.success) {
				delete forms.name;
				delete forms.handle;

				try {
					const loginResponse = await Axios.post(urlpl,{
					...forms,
					});

					if (loginResponse.data.success) {
						const token = loginResponse.data.data.token;
						const currentUser = await Axios.get(urlgl,{
							headers: {
								Authorization : `Bearer ${token}`
							},
						});
						const id = currentUser.data.data.id;
						navigate('/', {replace:true});
					}

				} catch (error) {
					setIsError((isError) => ({
						status : true,
						message : 'error while try to log in',
					}));
				}
			}
		} catch (error) {
			setIsError((isError) => ({
				status : true,
				message : 'error while try to sign up',
			}));
			console.log(error);
		}
	};

  return(
    <>
    <Wrapper>
    <FormWrapper>
      <form onSubmit={handleSignup}>
        <Title>Signup</Title>
        <Label>Nama</Label><br/>
        <center><Input type='text' placeholder='Masukkan nama'
        onChange={(e) =>
          setForms(() => ({
            ...forms, name: e.target.value }))}
        /><br/></center>
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
        <Label>Username</Label><br/>
        <center><Input type='text' placeholder='Masukkan username'
        onChange={(e) =>
          setForms(() => ({
            ...forms, username: e.target.value }))}
        /><br/></center>
        <center><Subtn type='submit'>Signup</Subtn></center>
      </form>
      <P>Sudah mempunyai akun?<Link to='/Login'>Login</Link></P>
    </FormWrapper>
    </Wrapper>
    </>
  )
}

export default Signup;