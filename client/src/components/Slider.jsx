import styled, { keyframes } from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState,useEffect } from "react";
import { sliderItems } from "../data/data";
import {mobile,device} from "../responsive"
import {Link} from "react-router-dom"

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin: 10px 0;
@media ${device.mobileL}{
  margin-top: 30px;
}
`;
const Arrow = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50%;
  left: ${(props) => props.direction === "left" && "5%"};
  right: ${(props) => props.direction === "right" && "5%"};
  opacity: 0.7;
  cursor: pointer;
  z-index: 999;
  @media (max-width:700px){
    left: ${(props) => props.direction === "left" && "0%"};
  right: ${(props) => props.direction === "right" && "0%"};
  bottom:45%; 
}
@media ${device.mobileL}{
  bottom:50%;
}
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slidee * -100}vw);
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({
    alignItems:"flex-end",justifyContent:"flex-start"
  })}
`;
const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 60%;
  @media ${device.tablet}{
width: 95%;
object-fit: cover;
};
@media ${device.mobileL}{
  width: 100%;
} 
`;

const animation=keyframes`
  from{
    bottom: -100px;
  }
  to {
    bottom: 0px;
  }
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  background-color: #F5F5F5;
  margin-right: 90px;
  position: relative;
  animation:${animation} 2s ease;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  ${mobile({
    width:"100%",position:"absolute",backgroundColor:"transparent",height:"200px",
  })}
  @media ${device.mobileL}{
padding: 50px;
margin-right: 90px;
}
  @media ${device.laptopL}{
  margin-right:0px
  };
  @media ${device.tablet}{
    max-width: 50%;
    padding: 40px 25px;
  };
`;

const Title = styled.h1`
  font-size: 65px;
  ${mobile({
    fontSize:"25px"
  })}
    @media ${device.tablet}{
font-size:40px;
  };
  @media ${device.mobileL}{
    font-size:25px;
  }
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  letter-spacing: 3px;
  ${mobile({
    margin:"20px 0"
  })}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  ${mobile({
    color:"black",backgroundColor:"white",position:"absolute",left:"20px"
  })}
`;
const DotsContainer=styled.div`
position: absolute;
bottom: 20px;
left: 50%;
display: flex;
gap: 5px;
z-index: 9999;
${mobile({
  transform:"translateX(-50%)",
})}
`
const Dot = styled.div`
background-color: black;
opacity: ${(props)=>props.active ? ".8" : ".4"};
height: 20px;
width: 20px;
border-radius: 50%;
z-index: 9999;
cursor: pointer;
`
const ButtonLink=styled(Link)`
text-decoration:none;
`

const Slider = () => {
  const [slidee, setSlide] = useState(0);
  const autoScroll=true
  let slideInterval;
  let intervalTime=5000;

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlide(slidee > 0 ? slidee - 1 : 3);
    } else {
      setSlide(slidee < 3 ? slidee + 1 : 0);
    }
  };

const runSlider=()=>{
slideInterval=setInterval(handleClick,intervalTime)
}  

const moveDot=(index)=>{
setSlide(index)
}

useEffect(() => {
  autoScroll && runSlider()
  return () => clearInterval(slideInterval)
}, [slidee])


  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ChevronLeftIcon style={{fontSize:"80px",color:"black"}} />
      </Arrow>
      <DotsContainer>

      {Array.from({length:4}).map((dot,index)=>(
        slidee === index ? <Dot active="true" onClick={()=>moveDot(index)}/> : <Dot onClick={()=>moveDot(index)}/>
      ))}
      </DotsContainer>
      <Wrapper slidee={slidee}>
        {sliderItems.map((item,index)=>{
          return(<>
            <Slide>
              <ImageContainer>
                <Image src={item.image} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <ButtonLink to={item.pathButton}>
                <Button>Kup teraz</Button>
                </ButtonLink>
              </InfoContainer>
            </Slide>
            </>
          )
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ChevronRightIcon style={{fontSize:"80px"}}/>
      </Arrow>
    </Container>
  );
};

export default Slider;
