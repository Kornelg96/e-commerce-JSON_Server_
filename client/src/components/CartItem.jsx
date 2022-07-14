import React from "react";
import styled from "styled-components";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { device, mobile } from "../responsive";
import { useDispatch } from "react-redux";
import { addOne, removeOne, removeProduct } from "../Redux/shoppingcartRedux";
import Delete from "@mui/icons-material/DeleteOutlined";

const Product = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  margin-top:20px;
  @media ${device.tabletS} {
    width: 100%;
    flex-direction: column;
    max-height: 300px;
  }
`;
const ProductDetail = styled.div`
  display: flex;
  flex: 1;
  height: 170px;
  @media ${device.mobileL} {
    width: 100%;
  }
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const Image = styled.img`
  flex: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
  @media ${device.tabletS}{
    max-width: 250px;
    max-height: 250px;
  }
  @media ${device.mobileL} {
    max-width: 200px;
    max-height: 250px;
  }
  @media (max-width:370px) {
    max-width: 100px;
    height: 140px;
  }
`;

const Details = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media ${device.mobileL} {
    flex: 1;
  }
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColorr = styled.span``;
const ProductSize = styled.span``;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Usun = styled.button`
  background-color: inherit;
  border: none;
`;

const CartItem = (info) => {
  const dispatch = useDispatch();
  const handleRemove = () => {

    // dispatch(removeProduct(info.info.id));
    console.log(info.info.id);
    dispatch(removeProduct({...info.info,color:info.info.color}))
    console.log(info.info.color)
  };
  const handleRemoveOne = () => {
    dispatch(removeOne(info.info.id));
  };
  const handleAddOne = () => {
    dispatch(addOne(info.info.id));
  };
  return (
    <Product>
      <ProductDetail>
        <Image src={info.info.img} />
        <Details>
          <ProductName>
            <b>{info.info.title}</b>
          </ProductName>
          <ProductId>
            <b>ID:</b> {info.info.id >= 0 ? info.info.id : 93813718293}
          </ProductId>
          <ProductColorr>
            <b>Kolor:</b> {info.info.color}
          </ProductColorr>
          <ProductSize>
            <b>Rozmiar:</b> {info.info.size}
          </ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <Add style={{ cursor: "pointer" }} onClick={handleAddOne} />
          <ProductAmount>{info.info.quantity}</ProductAmount>
          <Remove
            style={{ cursor: "pointer", marginRight: "20px" }}
            onClick={handleRemoveOne}
          />
          <Usun onClick={handleRemove}>
            <Delete />
          </Usun>
        </ProductAmountContainer>
        <ProductPrice>{info.info.price} PLN</ProductPrice>
      </PriceDetail>
    </Product>
  );
};

export default CartItem;
