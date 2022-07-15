import styled from "styled-components";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { addProduct } from "../Redux/shoppingcartRedux";
import { useDispatch } from "react-redux";
import { mobile, device } from "../responsive";

const Sizes = styled.p`
  display: none;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  @media ${device.mobileL} {
    display: ${(props) => (props.mobile ? "flex" : "none")};
  }
`;
const Title = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin: 8px 0;
  color: #808080;
  text-align: center;
  @media ${device.mobileL} {
    font-size: 15px;
    display: block;
    margin: 4px 0;
  }
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin: -20px;
  }
  &:hover ${Title} {
    -webkit-box-orient: horizontal;
  }
  &:hover ${Sizes} {
    display: flex;
  }
  @media ${device.mobileL} {
    padding: 0;
    &:hover {
      box-shadow: none;
      margin: 0;
    }
    &:hover ${Title} {
      -webkit-box-orient: vertical;
    }
  }
`;

const Wrapper = styled.div`
  flex: 5;
  width: 100%;
  overflow: hidden;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: linear-gradient(
    90deg,
    rgba(250, 248, 248, 1) 0%,
    rgba(197, 197, 197, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(243, 243, 243, 1) 0%,
    rgba(227, 227, 227, 1) 100%
  );
  z-index: 3; ;
`;

const Infoo = styled.div`
  flex: 1;
  margin-top: 10px;
`;
const Cena = styled.p`
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  margin-top: 15px;
  @media ${device.mobileL} {
    margin-top: 5px;
  }
`;
const Brand = styled.p`
  text-align: center;
  font-weight: bold;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  z-index: 3100;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Input = styled.input`
  appearance: none;
  font: inherit;
  color: currentColor;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border: 0.5px solid #c8c7c7;
  margin-bottom: 8px;
  margin-right: 6px;
  cursor: pointer;
  &::after {
    content: "";
    width: 100%;
    height: 2.5px;
    background-color: black;
    position: relative;
    top: 25px;
    display: none;
  }

  &:hover::after {
    display: block;
  }
  @media ${device.mobileL} {
  }
`;

const P = styled.p`
text-decoration: ${(props)=>props.styl ? "line-through" : "none"};
opacity: ${(props)=>props.styl ? ".6" : "1"};
`;

const Product3 = ({ item }) => {
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(addProduct({ ...item, price: item.price, quantity: 1 }));
  };

  return (
    <Container>
      <Wrapper>
        <Image src={item.img} alt="Tu powinno pojawić się zdjęcie produktu" />
        <Info>
          <Icon>
            <ShoppingCartOutlined onClick={handleCart} />
          </Icon>
          <Icon>
            <Link to={`/product/${item.id}`}>
              <SearchOutlined />
            </Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Wrapper>
      <Infoo>
        <StyledLink to={`/product/${item.id}`}>
          <Brand>{item.marka}</Brand>
          <Title>{item.title}</Title>
          <Cena>{item.price} zł</Cena>
          <Sizes>
            {item.sizes.map((s, index, arr) => {
              return <>
              {s.quantity > 0 ? <>
              <P>{s.size}</P>{index<arr.length-1 ? "/": ""}</>
               :<> 
              <P styl="true">{s.size}</P>{index<arr.length-1 ? "/": ""}</>}
              </>;
            })}
          </Sizes>
          <Sizes mobile="true">
            {item.colors.map((c, index, arr) => {
              return <Input type="radio" color={c} />;
            })}
          </Sizes>
        </StyledLink>
      </Infoo>
    </Container>
  );
};

export default Product3;
