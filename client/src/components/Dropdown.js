import { Link } from 'react-router-dom'
const Dropdown = ({ submenus }) => {
  return (
    <ul className="dropdown">
      {submenus.map((submenu, index) => (
        <>
          <li key={index} className="menu-items">
            <Link to={submenu.path} className='submenuu'>
              {submenu.title}
            </Link>
            {submenu.przyklad &&
              <>
                {submenu.przyklad.map((item, index,) => (
                   
                  <Link to={`${submenu.path}/${item}`} className="submenuu__item" id='elo'>{item}</Link>
                )
                )}
              </>
            }
          </li>
        </>
      ))}
    </ul>
  );
};

export default Dropdown;