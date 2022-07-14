import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { menuItems } from "../data/data";
import ItemsMenu from "./ItemsMenu";

const menuLeftt=keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`
const SidebarWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  z-index: 10;
  position: relative;
  margin-top: 25%;
  animation: ${menuLeftt} 1.5s;
`;

const Navigation = ({ displayHandlerMenu }) => {
  const [currentShownItemId, setCurrentShownItemId] = useState();
  return (
    <>
      <SidebarWrap>
        {menuItems.map((item, index) => (
          <ItemsMenu
            key={index}
            item={item}
            displayHandlerMenu={displayHandlerMenu}
            currentShownItemId={currentShownItemId}
            setCurrentShownItemId={setCurrentShownItemId}
          />
        ))}
      </SidebarWrap>
    </>
  );
};

export default Navigation;
