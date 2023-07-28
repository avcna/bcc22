import styled from "styled-components";
import Phone from "../images/phone.png";
import Map from "../images/map.png";

export const Card = styled.section`
  font-size: 16px;
  padding: 29px 40px 49px 40px;
  background-color: #023047;
  color: white;
  margin: 0 165px 30px;
  font-family: Poppins;
  border-radius: 30px;
  display: flex;
`;

export const DivSearch = styled.div`
  background-color: #f9f9f9;
  border-radius: 50px;
  width: 1000px;
  padding: 9px 0;
  z-index: 5;
  margin-top: 44px;
  box-shadow: 4px 8px 10px 0px #00000040;
`;

export const SearchInput = styled.input`
  background-color: #f9f9f9;
  height: 33px;
  font-size: 15px;
  outline: none;
  border: none;
  width: 850px;
  margin-left: 1.4rem;
`;

export const Img = styled.img`
  height: 25px;
  position: relative;
  top: 3px;
`;

export const ClinicName = styled.h5`
  color: #ffb703;
  font-family: Poppins;
`;

export const Warn = styled.p`
  color: red;
  font-family: Poppins;
`;

export const A = styled.a`
  color: #ffb703;
  text-decoration: none;
  text-align: right;

  &:hover {
    color: #ffb703;
    text-decoration: underline;
  }
`;

export const Icon = styled.img`
  margin-right: 21px;
  height: 17px;
`;

const ClinicCard = ({ name, img, phone_number, address, link_google_maps }) => {
  return (
    <Card>
      <img src={img} style={{ borderRadius: "30px" }} />
      <div style={{ paddingLeft: "56px" }}>
        <ClinicName>{name}</ClinicName>
        <Icon src={Phone} />
        {phone_number} <br />
        <Icon src={Map} />
        {address}
        <br />
        <A target="_blank" href={link_google_maps}>
          {" "}
          Lihat di map
        </A>
      </div>
    </Card>
  );
};

export default ClinicCard;
