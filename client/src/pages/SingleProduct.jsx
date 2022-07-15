import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import styled from "styled-components";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import { popularProducts } from "../data/data";
import { useLocation } from "react-router-dom";
import { addProduct } from "../Redux/shoppingcartRedux";
import { useDispatch } from "react-redux";
import { device } from "../responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import ModalAdd from "../components/ModalAdd";
SwiperCore.use([Navigation, Pagination]);

const Container = styled.section`
  background: rgb(248, 248, 248);
  font-family: "EB Garamond", serif;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 0 70px;
  @media (max-width: 580px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
`;
const Wrapper2 = styled.div`
  display: none;
  flex-direction: column;
  margin-top: 35px;
`;
const Galerry = styled.div`
  min-width: 300px;
  max-width: 450px;
  min-height: 55vh;
  max-height: 65vh;
  margin-bottom: 150px;
  margin-top: 35px;
  background: white;
  margin-right: 45px;
  @media (max-width: 580px) {
    min-width: 100%;
    width: 100%;
    margin: 35px 0 0 0;
    height: 80vh;
  }
`;
const Subgalerry = styled.div`
  display: flex;
  max-width: 450px;
  height: 60px;
  gap: 8px;
  margin-top: 5px;
  background-color: white;
  @media (max-width: 580px) {
    display: none;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
  @media ${device.laptopM} {
    object-fit: contain;
  }
  @media (max-width: 580px) {
    height: 100%;
    object-fit: contain;
  }
  @media ${device.mobileS} {
    object-fit: cover;
  }
`;

const Opis = styled.div`
  flex: 2;
  margin-top: 35px;
  @media ${device.mobileL} {
    margin: 0;
  }
`;
const Titlee = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 35px;
  @media ${device.mobileL} {
    margin-bottom: 10px;
  }
`;
const Cena = styled.div`
  font-size: 22px;
  margin-bottom: 15px;
`;
const Kolor = styled.span`
  font-size: 16px;
  display: block;
  margin-bottom: 8px;
`;
const Input = styled.input`
  appearance: none;
  font: inherit;
  color: currentColor;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
  border: 0.5px solid #c8c7c7;
  margin-bottom: 8px;
  margin-right: 6px;
  cursor: pointer;
  &::after {
    content: "";
    width: 80%;
    margin: 0 auto;
    height: 2.5px;
    background-color: black;
    position: relative;
    top: 32px;
    display: none;
  }

  &:hover::after {
    display: block;
  }
  &:focus::after {
    display: block;
  }
`;

const Rozmiar = styled.div`
  margin-bottom: 8px;
  color: ${(props) => (props.type === "alert" ? "red" : "black")};
`;
const RozmiarValue = styled.button`
  width: 50px;
  height: 40px;
  border-radius: 20px;
  border: ${(props) =>
    props.type === "alert" ? "2px solid red" : "1px solid darkgray"};
  padding: 5px;
  font-size: 14px;
  margin-right: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  &:focus {
    border: 3px solid darkgray;
  }
  &:hover {
    border: 3px solid darkgray;
  }
`;

const Uwaga = styled.div`
  margin-top: 10px;
  color: orange;
  display: none;
`;
const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 10px 0;
  @media ${device.tablet} {
    flex-wrap: wrap;
  }
  @media ${device.mobileL} {
    flex-wrap: nowrap;
    justify-content: center;
  }
  @media ${device.mobileS} {
    flex-wrap: wrap;
  }
`;
const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Ilosc = styled.span`
  font-weight: bold;
`;
const Koszyk = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  margin-left: 15px;
  background-color: #df9a55;
  border: 1px solid orange;
  color: white;
  letter-spacing: 2px;
  gap: 5px;
  font-weight: 500;
  font-size: 14px;
  @media (max-width: 858px) {
    margin: 0;
  }
  @media ${device.mobileL} {
    margin-left: 15px;
  }
  @media ${device.mobileS} {
    margin-left: 0;
  }
`;
const Kod = styled.div`
  position: relative;
  bottom: 0;
`;

const OpisContinue = styled.div`
  display: flex;
  gap: 25px;
  cursor: pointer;
  @media ${device.mobileS} {
    flex-direction: column;
  }
`;
const KolorsWrapper = styled.div``;
const ContainerImg = styled.div`
max-width: 350px;
height: 450px;

`;

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [products, setProducts] = useState(popularProducts[id]);
  const [display, setDisplay] = useState({ display: "none" });
  const dispatch = useDispatch();
  const displayHandler = (quantity) => {
    if (quantity < 6) {
      setDisplay({ display: "block" });
    } else {
      setDisplay({ display: "none" });
    }
  };
  const [srcImage, setSrcimage] = useState(popularProducts[id].img);
  const handleSrc = (e) => {
    setSrcimage(e.target.src);
  };

  const [open, setopen] = useState({ display: "flex" });
  const [open2, setopen2] = useState({ display: "none" });
  const [open3, setopen3] = useState({ display: "none" });

  const openWrapper3_1 = () => {
    setopen({ display: "flex" });
    setopen2({ display: "none" });
    setopen3({ display: "none" });
  };
  const openWrapper3_2 = () => {
    setopen({ display: "none" });
    setopen2({ display: "flex" });
    setopen3({ display: "none" });
  };
  const openWrapper3_3 = () => {
    setopen({ display: "none" });
    setopen2({ display: "none" });
    setopen3({ display: "flex" });
  };

  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type) => {
    if (type === "minus") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const defaultColor = products.colors[0];
  const [color, setColor] = useState(defaultColor);
  const [size, setSize] = useState("");
  const sizeHandler = (e, index) => {
    setSize(e.target.value);
    setCheck(false);
    const elementsCollection = document.getElementsByTagName("button");
    const elements = [...elementsCollection];
    elements.map((element) => {
      element.classList.remove("active_btn");
    });
    if ((e.target.id = index)) {
      let el = document.getElementById(index);
      el.classList.add("active_btn");
    } else {
      console.log("wrong");
    }
  };

  const handleClick = () => {
    if (size && color) {
      dispatch(
        addProduct({
          ...products,
          price: products.price * quantity,
          quantity,
          size,
          color,
        })
      );
      setModal(true);
    } else {
      setCheck(true);
    }
  };
  const handleInput = (color, e, index) => {
    const elements = document.getElementsByTagName("Input");
    console.log(e.target.id);
    const elementss = [...elements];
    elementss.map((element) => {
      element.classList.remove("active_input");
    });
    setColor(color);
    if ((e.target.id = index)) {
      let indexx = document.getElementById(index);
      indexx.classList.add("active_input");
    } else {
      document.getElementById(index).classlist.remove("active_input");
    }
  };

  let innerWidth = window.innerWidth;
  let isMobile;
  if (innerWidth < 580) {
    isMobile = true;
  }
  const [modal, setModal] = useState(false);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    document.getElementById(1).classList.add("active_input");
  }, []);

  return (
    <>
      {modal && <ModalAdd srcImage={srcImage} setModal={setModal} />}
      <Container>
        <Wrapper>
          <Galerry>
            {isMobile ? (
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                navigation={false}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Img src={srcImage} alt="Tu powinno pojawić się zdjęcie produktu" />
                </SwiperSlide>
                {products.subImg.map((img)=>(
                  <SwiperSlide>
                    <Img src={img} onClick={handleSrc} alt="Tu powinno pojawić się zdjęcie produktu"/>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <ContainerImg>
                <Img src={srcImage} alt="Tu powinno pojawić się zdjęcie produktu"/>
              </ContainerImg>
            )}
            <Subgalerry>
              <Img src={products.img} onClick={handleSrc} />
              {products.subImg.map((img)=>(
                  <Img src={img} onClick={handleSrc} alt="Tu powinno pojawić się zdjęcie produktu"/>
              ))}
            </Subgalerry>
          </Galerry>
          <Opis>
            <Titlee>{products.title} </Titlee>
            <Cena>
              {products.price} zł{" "}
              <span style={{ fontSize: "15" }}>w tym vat</span>
            </Cena>
            <Kolor> Kolor:</Kolor>
            <KolorsWrapper id="colors_wrapper">
              {products.colors.map((c, index) => (
                <Input
                  type="radio"
                  color={c}
                  onClick={(e) => handleInput(c, e, index + 1)}
                  id={index + 1}
                />
              ))}
            </KolorsWrapper>
            {!check ? (
              <Rozmiar>Rozmiar:</Rozmiar>
            ) : (
              <Rozmiar type="alert">Wybierz Rozmiar :</Rozmiar>
            )}
            {products.sizes.map((s, index) => {
              return (
                s.quantity > 0 && (
                  <>
                    <RozmiarValue
                      id={index + 20}
                      value={s.size}
                      key={s.size}
                      type={check && "alert"}
                      onClick={(e) => {
                        displayHandler(s.quantity);
                        sizeHandler(e, index + 20);
                      }}
                    >
                      {s.size}
                    </RozmiarValue>
                  </>
                )
              );
            })}
            <Uwaga style={display}>Ostatnie sztuki w magazynie</Uwaga>
            <AmountWrapper>
              <IconWrapper>
                <Add onClick={() => handleQuantity("plus")} />
              </IconWrapper>
              <Ilosc>{quantity}</Ilosc>
              <IconWrapper>
                <Remove onClick={() => handleQuantity("minus")} />
              </IconWrapper>
              <Koszyk onClick={handleClick}>
                Dodaj do koszyka
                <ShoppingCart />
              </Koszyk>
            </AmountWrapper>
            <Kod> Kod produktu: 123123</Kod>
          </Opis>
        </Wrapper>
        <Wrapper>
          <OpisContinue>
            <h3 onClick={openWrapper3_1}>Opis</h3>
            <h3 onClick={openWrapper3_2}>Szczegóły produktu</h3>
            <h3 onClick={openWrapper3_3}>Tabela rozmiarów</h3>
          </OpisContinue>
        </Wrapper>
        <Wrapper>
          <Wrapper2 style={open}>
            <p>Bluza tie dye:</p>
            <p>- okrągły dekolt</p>
            <p>- swobodny fason</p>
            <p>- efekt tie dye na całości </p>
            <p>- brzegi wykończone ściągaczem </p>

            <p>- wykonana z miękkiej dzianiny z wysoką zawartością bawełny </p>
            <p>Modelka ma 175 cm wzrostu i ma na sobie rozmiar S</p>
            <p>
              UWAGA: Produkt farbowany ręcznie. Efekt farbowania może
              nieznacznie różnić się pomiędzy egzemplarzami tego samego modelu.
            </p>
            <p>
              Przed pierwszym użyciem produkt należy wyprać. Produkt w
              początkowym okresie noszenia może farbować.
            </p>
          </Wrapper2>
          <Wrapper2 style={open2}>
            <label htmlFor="">Dane techniczne:</label>
            <p>skład:bawełna 95%, elastan 5%</p>
            <label htmlFor=""> Wskazówki Konserwacji</label>
            <p>-nie prac powyzej 90%</p>
            <p>-nie bielic</p>
          </Wrapper2>
          <Wrapper2 style={open3}>
            <table>
              <tbody>
                <tr>
                  <td>Rozmiary</td>
                  <td>S</td>
                  <td>M</td>
                  <td>L</td>
                  <td>XL</td>
                  <td>XXL</td>
                  <td>XXXL</td>
                </tr>
                <tr>
                  <td>Szerokość pod pachami</td>
                  <td>57</td>
                  <td>58</td>
                  <td>62</td>
                  <td>65</td>
                  <td>67</td>
                  <td>69</td>
                </tr>
                <tr>
                  <td>Długość całkowita</td>
                  <td>77</td>
                  <td>78</td>
                  <td>82</td>
                  <td>85</td>
                  <td>87</td>
                  <td>89</td>
                </tr>
              </tbody>
            </table>
          </Wrapper2>
        </Wrapper>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default SingleProduct;
