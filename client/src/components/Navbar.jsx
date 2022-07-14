import MenuItems from "./MenuItems";
import { menuItems } from "../data/data";
import "./components.css";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Annoucement from "./Annoucement";
import { useSelector } from "react-redux";
import { mobile, device } from "../responsive";
import Hamburger from "@mui/icons-material/MenuOutlined";
import Close from "@mui/icons-material/CloseOutlined";
import Navigationn from "./Navigation";
import axios from 'axios';

const Container = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 90px;
  position: relative;
  ${mobile({
    width: "100%",
    margin: "0 0",
  })}
  @media ${device.laptop} {
    margin: 0 0;
  }
  @media (max-width: 700px) {
    width: 100%;
    margin: 0;
  }
  @media ${device.mobileS} {
    margin: 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const Left = styled.div`
  flex: 1;
`;
const MobileNav = styled.div`
  display: none;
  cursor: pointer;
  z-index: 100;

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
  }
`;
const Center = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 700px) {
    justify-content: flex-end;
    gap: 5px;
  }
`;

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  @media (max-width: 700px) {
    display: none;
  }
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 5px;
  @media (max-width: 700px) {
    display: none;
  }
  @media ${device.mobileS} {
    padding: 0;
  }
`;
const SearchContainer2 = styled.div`
  border: 1px solid lightgray;
  display: none;
  align-items: center;
  padding: 5px;
  @media (max-width: 700px) {
    display: flex;
    border-radius: 40px;
  }
`;

const Input = styled.input`
  border: none;
  margin-left: 5px;
  text-align: left;
  width: 100%;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  color: black;
  @media ${device.mobileS} {
    font-size: 22px;
  }
`;
const UserAction = styled.div`
  position: absolute;
  z-index: 1000;
  right: 0;
  top: 15px;
  margin: 40px 0px;
  border: 0.5px solid #fcf5f5;
`;
const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoginWrapper = styled.div`
  flex: 1;
  padding-bottom: 35px;
  background-color: #f5f5f5;
  padding: 50px 70px;
  text-align: center;
`;
const RegisterWrapper = styled.div`
  flex: 1;
  padding: 50px 40px;
  text-align: center;
  background-color: teal;
`;
const Button = styled.button`
  color: ${(props) => (props.color === "first" ? "white" : "black")};
  background: ${(props) => (props.color === "first" ? "teal" : "white")};
  font-size: 18px;
  border: none;
  padding: 15px 40px;
  margin-top: 35px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: ${(props) => props.color === "first" && 0.85};
    color: ${(props) => props.color === "secondary" && "white"};
    background-color: ${(props) => props.color === "secondary" && "black"};
  }
`;
const Divv = styled.div`
  display: flex;
  padding: 15px 0;
  cursor: pointer;
`;
const StyledLink = styled(Link)`
  &:link {
    color: black;
  }
  &:visited {
    text-decoration: none;
    color: black;
  }
`;
const ContainerMobile = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: black;
  z-index: 100;
  position: absolute;
  top: -40px;
  left: 0px;
`;

const nav_personIcon = { cursor: "pointer", fontSize: 28 };
const nav_shoppingIcon = { cursor: "pointer", fontSize: 28 };

const Navbar = () => {

    const [menu, setMenu] = useState([]);

  useEffect(() => {
    let getMenuItems = async () => {

        const res = await axios.get("http://localhost:3006/menuItemss");
        // setTimeout(()=>setMenu(res.data),1)
        setMenu(res.data)
    };
    getMenuItems();
  }, []);
  const [style, setStyle] = useState({ display: "none" });
  const [isHide, setIsHide] = useState(true);
  const quantityNav = useSelector((state) => state.shoppingCart.cartquantity);
  const id = "zaloguj";
  let className = "nav-area";
  if (!isHide) {
    className += " active";
  }
  const displayHandlerMenu = () => {
    setIsHide(!isHide);
  };
  let innerWidth = window.innerWidth;
  let isMobile = false;
  if (innerWidth < 700) {
    isMobile = true;
  }
  return (
    <>
      <Annoucement />
      <Container>
        <UserAction
          style={style}
          onMouseEnter={(e) => {
            setStyle({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStyle({ display: "none" });
          }}
        >
          <ActionContainer>
            <LoginWrapper>
              <h2 style={{ fontSize: 20 }}>
                Posiadasz konto na naszej stronie?
              </h2>
              <StyledLink to={`/account/${id}`} id="zaloguj">
                <Button color="first">Zaloguj się</Button>
              </StyledLink>
            </LoginWrapper>
            <RegisterWrapper>
              <h2 style={{ color: "white", fontSize: 20 }}>
                Nie posiadasz konta na naszej stronie?
              </h2>
              <StyledLink to={`/account/rejestracja`}>
                <Button color="secondary">Zarejestruj się</Button>
              </StyledLink>
            </RegisterWrapper>
          </ActionContainer>
        </UserAction>
        <Wrapper>
          <Left>
            <Language>PL</Language>
            <MobileNav>
              <Hamburger onClick={displayHandlerMenu} />
              {!isHide && (
                <ContainerMobile>
                  <Close
                    style={{
                      color: "white",
                      fontSize: "28px",
                      position: "absolute",
                      left: "15px",
                      top: "55px",
                    }}
                    onClick={displayHandlerMenu}
                  />
                  <Navigationn displayHandlerMenu={displayHandlerMenu} />
                </ContainerMobile>
              )}
            </MobileNav>
          </Left>
          <Center>
            <StyledLink to="/" style={{ textDecoration: "none" }}>
              <Logo>e-commerce</Logo>
            </StyledLink>
          </Center>
          <Right>
            <SearchContainer>
              <SearchIcon style={{ color: "gray", fontSize: 18 }} />
              <Input />
            </SearchContainer>
            <Divv
              onMouseEnter={(e) => {
                setStyle({ display: "block" });
              }}
              onMouseLeave={(e) => {
                setStyle({ display: "none" });
              }}
            >
              <PersonOutlineIcon style={nav_personIcon} />
            </Divv>
            <StyledLink to="/cart">
              <Badge badgeContent={quantityNav} color="primary">
                <ShoppingCartIcon style={nav_shoppingIcon} />
              </Badge>
            </StyledLink>
          </Right>
        </Wrapper>
        <SearchContainer2>
          <SearchIcon style={{ color: "gray", fontSize: 18 }} />
          <Input />
        </SearchContainer2>
        <div className={className}>
          <nav>
            <ul className="menus">
              {menu.map((menu, index) => {
                return <MenuItems items={menu} key={index} />;
              })}
            </ul>
          </nav>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
