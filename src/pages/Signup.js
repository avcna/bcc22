import {
  FormWrapper,
  Wrapper,
  Section,
  Label,
  Input,
  Subtn,
  Title,
  P,
  Img,
} from "./Login";
import { NavLink as Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../config/Auth";
import Footer from "../components/Footer";
import Logo from "../images/logo.png";
import { petlinkAPI } from "../config/api";
import { useEffect } from "react";

const Signup = () => {
  useEffect(() => {
    const initialValue = document.body.style.zoom;
    document.body.style.zoom = "90%";
    return () => {
      document.body.style.zoom = initialValue;
    };
  }, []);
  const { setAndGetTokens } = useAuth();
  const navigate = useNavigate();
  const [forms, setForms] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
  });
  const [isError, setIsError] = useState({ status: false, message: "" });
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const registerResponse = await petlinkAPI.post("/user/register", {
        ...forms,
      });

      if (registerResponse.data.success) {
        // delete forms.name;
        // delete forms.handle;

        try {
          const loginResponse = await petlinkAPI.post("/user/login", {
            ...forms,
          });
          console.log(loginResponse);

          if (loginResponse.data.success) {
            const token = loginResponse.data.data.token;
            const currentUser = await petlinkAPI.get("/user", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            const id = currentUser.data.data.id;
            setAndGetTokens(token, id);
            navigate("/", { replace: true });
          }
        } catch (error) {
          setIsError((isError) => ({
            status: true,
            message: "error while try to log in",
          }));
        }
      }
    } catch (error) {
      setIsError((isError) => ({
        status: true,
        message: "error while try to sign up",
      }));
      console.log(error);
    }
  };

  return (
    <>
      <center>
        <Link to="/">
          <Img width="280px" className="img-login" src={Logo} alt="logo" />
        </Link>
      </center>
      <Wrapper>
        <FormWrapper>
          <form onSubmit={handleSignup}>
            <Title>Signup</Title>
            <Label>Nama</Label>
            <br />
            <center>
              <Input
                type="text"
                placeholder="Masukkan nama"
                onChange={(e) =>
                  setForms(() => ({
                    ...forms,
                    name: e.target.value,
                  }))
                }
              />
              <br />
            </center>
            <Label>Email</Label>
            <br />
            <center>
              <Input
                type="email"
                placeholder="Masukkan email"
                onChange={(e) =>
                  setForms(() => ({
                    ...forms,
                    email: e.target.value,
                  }))
                }
              />
              <br />
            </center>
            <Label>Password</Label>
            <br />
            <center>
              <Input
                type="password"
                placeholder="Masukkan password"
                onChange={(e) =>
                  setForms(() => ({
                    ...forms,
                    password: e.target.value,
                  }))
                }
              />
              <br />
            </center>
            <Label>Username</Label>
            <br />
            <center>
              <Input
                type="text"
                placeholder="Masukkan username"
                onChange={(e) =>
                  setForms(() => ({
                    ...forms,
                    username: e.target.value,
                  }))
                }
              />
              <br />
            </center>
            <center>
              <Subtn type="submit">Signup</Subtn>
            </center>
          </form>
          <P>
            Sudah mempunyai akun?<Link to="/Login">Login</Link>
          </P>
        </FormWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Signup;
