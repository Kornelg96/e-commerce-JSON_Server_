import styled from "styled-components";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile, device } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
position: relative;
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
  @media (max-width:720px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  @media (max-width: 720px) {
  }
  ${mobile({ margin: "10px 0px" })}
  @media ${device.mobileL} {
    font-size: 18px;
    color: black;
  }
`;
const Option = styled.option`
`;
const Display = styled.a`
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  @media ${device.mobileL} {
    font-size: 18px;
  }
`;
const DisplayOption = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const ProductList = () => {
  const [value, setvalue] = useState();
  const [type, setType] = useState();
  let version = { type: "", value: "" };
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const kategoria = location.pathname.split("/")[3];
  const podkategoria = location.pathname.split("/")[4];
  const innerWidth = window.innerWidth;
  const [index, setIndex] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [sort, setSort] = useState("newest");
  const [style, setStyle] = useState({});
  let mobileVersion;

  useEffect(() => {
    if (innerWidth < 450) {
      version.type = "mobile";
      version.value = 1;
      setvalue(1);
      setType("mobile");
    } else if (innerWidth < 830) {
      version.type = "tablet";
      version.value = 2;
      setvalue(2);
      setType("tablet");
    } else if (innerWidth < 1024) {
      version.type = "laptop";
      version.value = 3;
      setType("laptop");
      setvalue(3);
    } else {
      version.type = "laptop";
      version.value = 4;
      setvalue(4);
      setType("laptop");
    }
  }, [innerWidth]);

  const handleSize = (e) => {
    const value = e.target.value;
    const index = e.target[e.target.selectedIndex].getAttribute("data-index");
    console.log(value, index);
    setSize(value);
    setIndex(index);
  };
  const handleColor = (e) => {
    const value = e.target.value;
    setColor(value);
  };
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  const versionStyleHandler = () => {
    if (type === "mobile") {
      setStyle({ gridTemplateColumns: "repeat(1,1fr)" });
    } else if (type === "tablet") {
      setStyle({ gridTemplateColumns: "repeat(2,1fr)" });
    } else if (type === "laptop" && value === 3) {
      setStyle({ gridTemplateColumns: "repeat(3,1fr)" });
    } else {
      setStyle({ gridTemplateColumns: "repeat(4,1fr)" });
    }
  };
  const versionStyleHandler2 = () => {
    if (type === "mobile") {
      setStyle({ gridTemplateColumns: "repeat(2,1fr)" });
    } else if (type === "tablet") {
      setStyle({ gridTemplateColumns: "repeat(3,1fr)" });
    } else if (type === "laptop" && value === 3) {
      setStyle({ gridTemplateColumns: "repeat(4,1fr)" });
    } else {
      setStyle({ gridTemplateColumns: "repeat(5,1fr)" });
    }
  };
  return (
    <Container>
      <Title>{cat ? cat : "Wszystkie produkty"}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtruj produkty:</FilterText>
          <Select name="color" onChange={handleColor}>
            <Option disabled selected>
              Kolor
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleSize}>
            <Option disabled selected data-index="nulllll">
              Rozmiar
            </Option>
            <Option data-index="0">S</Option>
            <Option data-index="1">M</Option>
            <Option data-index="2">L</Option>
            <Option data-index="3">XL</Option>
            <Option data-index="4">2XL</Option>
            <Option data-index="5">3XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sortuj od:</FilterText>
          <Select onChange={handleSort}>
            <Option selected value="newest">
              Najnowsze
            </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
          <DisplayOption>
            <Display type="two" onClick={versionStyleHandler}>
              {value}
            </Display>
            <Display onClick={versionStyleHandler2}>{value + 1}</Display>
          </DisplayOption>
        </Filter>
      </FilterContainer>
      <Products
        cat={cat}
        sort={sort}
        size={size}
        color={color}
        style={style}
        kategoria={kategoria}
        podkategoria={podkategoria}
        index={index}
      />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
