import React from "react";
import styled from "styled-components";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Div = styled.div``;

const Home = () => {
  return (
    <Div>
      <Slider />
      <Categories />
      <Newsletter />
      <Footer />
    </Div>
  );
};

export default Home;
