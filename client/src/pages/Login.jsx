import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Email from "@mui/icons-material/MarkEmailUnreadOutlined";
import Search from "@mui/icons-material/YoutubeSearchedForOutlined";
import Restore from "@mui/icons-material/RestoreOutlined";
import { useLocation } from "react-router-dom";
import { device } from "../responsive";

const Container = styled.div`
  display: flex;
  margin: 10px 0;
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
const Login = styled.div`
  background-color: white;
  height: 79vh;
  flex: 1;
  padding: 45px 0;
`;
const Register = styled.div`
  background-color: #f5f5f5;
  height: 79.5vh;
  flex: 1;
  padding: 45px 0;
`;
const Title = styled.h1`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 50px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 25%;
  margin-top: 30px;
`;
const Label = styled.label`
  position: absolute;
  left: 0;
  top: 5px;
  color: black;
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
`;

const Invalid = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type === "row" ? "row" : "column")};
  gap: 20px;
  align-items: center;
  margin-bottom: 25px;
  position: relative;
  width: 100%;
  & + & {
    align-items: flex-start;
    margin-bottom: 0px;
  }

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 6px 3px;
  border: none;
  border-bottom: 1px solid lightgray;
  background-color: inherit;
  cursor: text;
  position: relative;
  z-index: 2;
  font-family: inherit;
  font-size: 14px;

  &:hover {
    border-bottom: 1px solid gray;
  }
  &:focus {
    border-bottom: 1px solid gray;
  }
  &:focus ~ ${Label}, &:not(:placeholder-shown)&:not(:focus) ~ ${Label} {
    top: -15px;
    font-size: 12px;
  }
`;
const Button = styled.button`
  width: 100%;
  background: ${(props) => (props.color === "first" ? "teal" : "white")};
  color: ${(props) => (props.color === "first" ? "white" : "black")};
  margin: 20px auto;
  padding: 13px;
  font-size: 16px;
  border: ${(props) => props.color === "first" && "1px solid teal"};

  &:hover {
    opacity: ${(props) => props.color === "first" && 0.85};
    color: ${(props) => props.color === "secondary" && "white"};
    background-color: ${(props) => props.color === "secondary" && "black"};
  }
`;

const Forgot = styled.a`
  margin: 0px auto;
  padding: 0px;
  text-decoration: underline;
  cursor: pointer;
`;
const Div = styled.div`
  text-align: center;
  padding: 0 20px;
`;
const Span = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const P = styled.p`
  text-align: ${(props) => (props.type === "first" ? "center" : "left")};
  font-weight: ${(props) => props.type === "secondary" && "bold"};
  padding: 0;
  margin: 0;
  word-wrap: wrap;
`;
const Wrapper = styled.div`
  width: 91%;
  margin: 0 auto;
`;

const Benefits = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;
  margin: 20px 0;
`;

const Loginn = () => {
  const iconStyle = { fontSize: "30px", color: "black", opacity: ".8" };
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);
  const hiddenHandler = (e, type) => {
    if (type === "zaloguj" && isHidden) {
      e.preventDefault();
      setIsHidden(!isHidden);
    } else if (type === "zarejestruj" && !isHidden) {
      console.log("wykonuje register");
      e.preventDefault();
      setIsHidden(!isHidden);
    } else {
      e.preventDefault();
      // validacja
    }
  };

  const handleSubmit = () => {
    // submit form funkcja
  };
  return (
    <Container>
      <Login>
        <Form onSubmit={handleSubmit}>
          <Title>Posiadasz konto?</Title>
          {!isHidden ? (
            <>
              <Invalid>
                <Input type="email" placeholder=" " />
                <Label>Email</Label>
              </Invalid>
              <Invalid>
                <Input type="password" placeholder=" " />
                <Label>Has??o</Label>
              </Invalid>
            </>
          ) : null}
          <Button
            color="first"
            type="submit"
            onClick={(e) => hiddenHandler(e, "zaloguj")}
          >
            Zaloguj si??
          </Button>
          <Invalid>
            {!isHidden ? (
              <>
                <Forgot>nie pami??tam has??a</Forgot>{" "}
              </>
            ) : null}
          </Invalid>
        </Form>
      </Login>
      <Register>
        <Form onSubmit={handleSubmit}>
          <Title>Nie posiadasz konta?</Title>
          {isHidden ? (
            <>
              <Invalid>
                <Input type="email" placeholder=" " />
                <Label>Email</Label>
              </Invalid>
              <Invalid type="row">
                <Input type="text" placeholder=" " />
                <Label>Imi??</Label>
                <Invalid>
                  <Input type="text" placeholder=" " />
                  <Label>Nazwisko</Label>
                </Invalid>
              </Invalid>
              <Invalid>
                <Input type="password" placeholder=" " />
                <Label>Has??o</Label>
              </Invalid>
            </>
          ) : null}
          <Button
            color="secondary"
            onClick={(e) => hiddenHandler(e, "zarejestruj")}
            type="submit"
          >
            Zarejestruj si??
          </Button>
          {!isHidden ? (
            <>
              <P type="first">Zyskasz:</P>
              <Wrapper>
                <Benefits>
                  <Email style={iconStyle} />
                  Wcze??niejszy dost??p do ofert specjalnych
                </Benefits>
                <Benefits>
                  <Search style={iconStyle} />
                  Wygodne ??ledzenie statusu zam??wie??
                </Benefits>
                <Benefits>
                  <Restore style={iconStyle} />
                  ??atwy dost??p do historii zakup??w
                </Benefits>
              </Wrapper>
            </>
          ) : null}
          {isHidden ? (
            <>
              <Invalid>
                <Div>
                  Klikaj??c w przycisk Zarejestruj si??, zgadzasz si?? z nasz??{" "}
                  <Span>Polityk?? prywatno??ci</Span>
                </Div>
              </Invalid>
            </>
          ) : null}
        </Form>
      </Register>
    </Container>
  );
};

export default Loginn;
