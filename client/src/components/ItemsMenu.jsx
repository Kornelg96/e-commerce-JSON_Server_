import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ItemsSubMenu from "./ItemsSubMenu";

const MenuItemLink = styled(Link)`
  color: white;
  color: black;
  display: flex;
  text-decoration: none;
  z-index: 10;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid white;
  font-weight: bold;
`;
const MenuItem = styled.span`
  color: white;
  font-size: 18px;
`;

const ItemsMenu = ({ item, displayHandlerMenu, index,currentShownItemId,setCurrentShownItemId }) => {
const [currentShownSubmenuItemId, setCurrentShownSubmenuItemId] = useState()
  const showSubmenu = () => {
    setCurrentShownItemId(currentShownItemId === item.title ? null : item.title);
  };
  return (
    <>
      <MenuItemLink to={item.path} onClick={showSubmenu} key={index}>
        <MenuItem>{item.title}</MenuItem>
      </MenuItemLink>
      {item.submenu &&
        currentShownItemId === item.title &&
        item.submenu.map((subItem, index) => (
          <>
            <ItemsSubMenu
              key={index}
              item={subItem}
              displayHandlerMenu={displayHandlerMenu}
              setCurrentShownSubmenuItemId={setCurrentShownSubmenuItemId}
              currentShownSubmenuItemId={currentShownSubmenuItemId}
            />
          </>
        ))}
    </>
  );
};

export default ItemsMenu;
