import Dropdown from "./Dropdown";
import {Link} from 'react-router-dom'
const MenuItems = ({ items }) => {
 return (
  <li className="menu-items">
   {items.submenu ? (
    <>
    <Link to={items.path}>
     <button type="button" aria-haspopup="menu">
      {items.title}
     </button>
    </Link>
     <Dropdown submenus={items.submenu} />
    </>
   ) : (
    <a href="/#stefan">{items.title}</a>
   )}
  </li>
 );
};

export default MenuItems;
