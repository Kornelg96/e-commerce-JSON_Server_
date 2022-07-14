
import styled from "styled-components";
import Footer from "../components/Footer";
import { device, mobile } from "../responsive";
import {useSelector} from "react-redux";
import CartItem from "../components/CartItem";
import {Link} from 'react-router-dom'

const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-top: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  border-bottom: 1.5px solid #eee;
  @media ${device.mobileL}{
    gap: 10px;
  }
  @media (max-width:350px){
flex-wrap: wrap;
  } 
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: .2px solid black;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  position: absolute;
  right: ${(props)=> props.direction === "right" && 40}px;
  left: ${(props)=> props.direction === "left" && 40}px;
  @media ${device.mobileL}{
    position: relative;
    right: ${(props)=> props.direction === "right" && 0}px;
  left: ${(props)=> props.direction === "left" && 0}px;
  height: 50px;
  min-width: 160px;
  }
`;

const TopTexts = styled.div`
@media (max-width:700px){
  transform:translateY(35px)
}
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.tabletS}{
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 3;
  margin-right: 50px;
  @media ${device.mobileL}{
  margin:0;
}
`;

const Summary = styled.div`
  flex: 1.2;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin-top: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: center;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  const item = useSelector((state) => state.shoppingCart);
  return (
    <Container>
      <Wrapper>
        <Title>{item.quantity>0 ? "Twój koszyk:" : "Twój koszyk jest pusty ;("}</Title>
        <Top>
          <Link to="/products">
          <TopButton direction="left">KONTYNUUJ ZAKUPY</TopButton>
          </Link>
          <TopTexts>
            <TopText>Koszyk ({item.quantity})</TopText>
            <TopText>Ulubione (0)</TopText>
          </TopTexts>
          <Link to="/order">
          <TopButton type="filled" direction="right">ZŁÓŻ ZAMÓWIENIE</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            {item.productsCart.map((p) => (
              <CartItem  info={p}/>
            ))}
            
          </Info>
          <Summary>
            <SummaryTitle>Podsumowanie zamówienia</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Cena przedmiotów</SummaryItemText>
              <SummaryItemPrice>{item.total} PLN</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Cena dostawy</SummaryItemText>
              <SummaryItemPrice>5.90 PLN</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Zniżka na dostawę</SummaryItemText>
              <SummaryItemPrice>-5.90 PLN</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>SUMA z vat</SummaryItemText>
              <SummaryItemPrice>{item.total} PLN</SummaryItemPrice>
            </SummaryItem>
            <Link to="/order">
            <Button>Przejdź do kasy</Button>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
