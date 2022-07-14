import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { device, mobile } from "../responsive";

const Container = styled.div`
  min-height: 30px;
  background-color: teal;
  color: white;
  display: ${(props) => (props.isHidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  position: relative;
  ${mobile({ height: "40px" })}
  @media ${device.mobileS}{
    height: 60px;
  }
`;
const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 30px;
  ${mobile({ right: "10px" })}
`;
const AnnoucementP = styled.p`
width: 75%;
display: flex;
align-items: center;
justify-content: center;
  ${mobile({ width: "75%", textAlign: "center" })}
`;

const Annoucement = () => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <Container isHidden={isHidden}>
      <AnnoucementP>
        Dzień matki z e-commerce! ! Zamów już dziś z dotawą 0zł !
      </AnnoucementP>
      <Close onClick={() => setIsHidden(true)}>
        <CloseIcon />
      </Close>
    </Container>
  );
};

export default Annoucement;
