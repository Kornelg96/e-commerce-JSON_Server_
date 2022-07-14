import { React, useState } from "react";
import styled from "styled-components";
import Done from "@mui/icons-material/DoneOutlined";
import Close from "@mui/icons-material/CloseOutlined";
import { Link } from "react-router-dom";
import { device } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: rgba(35, 31, 32, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  @media ${device.mobileL}{
    position: fixed;
    top: 0;
  }
`;
const Wrapper = styled.div`
  background: white;
  width: 550px;
  position: relative;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3%;
  @media ${device.laptop}{
    width: 450px;
  }
  @media ${device.mobileS}{
    height: 75vh;
  }
`;
const CloseWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;
const DoneWrapper = styled.div`
  margin-top: 35px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: green;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 26px;
  padding: 0 15px;
  @media ${device.mobileS}{
    font-size: 22px;
  }
`;
const Product = styled.div`
  width: 100%;
  max-height: 40%;
  margin: 20px 0;
  @media ${device.mobileS}{
    margin-bottom:65px ;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Button = styled.button`
  width: 60%;
  padding: 8px;
  font-size: 16px;
  background: ${(props) => (props.type === "2" ? "#df9a55" : "inherit")};
  color: ${(props) => (props.type === "2" ? "white" : "black")};
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 20px;
`;
const MyLink=styled(Link)`
width: 60%;
display: flex;
justify-content: center;
text-decoration: none;
`

const ModalAdd = ({ srcImage, setModal }) => {

  const handleClick = () => {
    setModal(false);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <CloseWrapper>
            <Close style={{ fontSize: "30px" }} onClick={handleClick} />
          </CloseWrapper>
          <DoneWrapper>
            <Done style={{ fontSize: "35px" }} />
          </DoneWrapper>
          <Title>Produkt został dodany pomyślnie do koszyka</Title>
          <Product>
            <Image src={srcImage} />
          </Product>
          <MyLink to="/cart">
          <Button type="2">Do kasy</Button>
          </MyLink>
          <Button onClick={handleClick}>Kontynuuj zakupy</Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default ModalAdd;
