import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import MailOutline from "@mui/icons-material/MailOutline";
import Phone from "@mui/icons-material/Phone";
import Pinterest from "@mui/icons-material/Pinterest";
import Room from "@mui/icons-material/Room";
import Twitter from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  @media (max-width:700px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  @media (max-width: 700px) {
    display: block;
    background-color: white;
  }
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled(Link)`
  width: 50%;
  margin-bottom: 10px;
  background-color: white;
  text-decoration: none;
  color: black;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>e-commerce</Logo>
        <Desc>
          "By moda była dla każdego"
          <br />
          Zapraszamy na nasze media społecznościowe :
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Przydatne zakładki</Title>
        <List>
          <ListItem to="/">e-commerce</ListItem>
          <ListItem to="/cart">Koszyk</ListItem>
          <ListItem to="/products/men">Mężczyzna</ListItem>
          <ListItem to="/">Ulubione</ListItem>
          <ListItem to="/products/women">Kobieta</ListItem>
          <ListItem to="/">Moje konto</ListItem>
          <ListItem to="/products/kid">Dziecko</ListItem>
          <ListItem to="/">Polityka prywatności</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Kontakt</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 55-55 Wrocław ul.Programistów
          1
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@e-commerce.pl
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
