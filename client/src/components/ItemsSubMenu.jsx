import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const show = keyframes`
from {
opacity:0;
}
to {
opacity:1;
}
`;
const MenuItem = styled.span`
  color: white;
  font-size: ${(props) => (props.subMenu === "true" ? "16px" : "18px")};
  padding: 10px;
  animation: ${show} 1.5s;
`;
const SubmenuItemLink = styled(Link)`
  color: white;
  display: flex;
  justify-content: center;
  text-decoration: none;
  justify-content: ${(props) =>
    props.dropdown === "true" ? "left" : "center"};
`;

const ItemsSubMenu = ({
  item,
  displayHandlerMenu,
  currentShownSubmenuItemId,
  setCurrentShownSubmenuItemId,
}) => {
  const showSubmenu = () => {
    setCurrentShownSubmenuItemId(
      currentShownSubmenuItemId === item.title ? null : item.title
    );
  };
  return (
    <>
      <SubmenuItemLink to={item.path} onClick={showSubmenu}>
        <MenuItem>{item.title}</MenuItem>
      </SubmenuItemLink>
      {item.przyklad &&
        currentShownSubmenuItemId === item.title &&
        item.przyklad.map((subsubItem) => (
          <SubmenuItemLink dropdown="true" to={`${item.path}/${subsubItem}`}>
            <MenuItem subMenu="true" onClick={displayHandlerMenu}>
              {subsubItem}
            </MenuItem>
          </SubmenuItemLink>
        ))}
    </>
  );
};

export default ItemsSubMenu;
