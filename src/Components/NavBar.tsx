import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [searchText, setSearchText] = useState("");

  const showSidebar = () => setSidebar(!sidebar);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  //const onSearch = (e: SyntheticEvent) => {
    //e.preventDefault();
    //dispatch(setCourseParams({ search: searchText }));
  //};

  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav__left">
          <div className="nav__left__hamburger">
            <FaIcons.FaBars onClick={showSidebar} />
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="cancel">
                  <FaIcons.FaChevronLeft />
                </li>
                
                <li className="nav-menu-items__header">Navigation</li>
                <Link to="/"><li>Home</li></Link>
                <Link to="/login"> <li>Login</li>  </Link>
              </ul> 
            </nav>
          </div> 
          <img src={Logo} className="nav__left__logo" alt="logo" />

          <ul className="nav__left__list">
            <Link to="/">
              <li className="nav__left__list__item">Home</li>
            </Link>
            <Link to="/login"><li className="nav__left__list__item">Login</li></Link>
            
          </ul>
        </div>
        <div className="nav__right">
          <form className="nav__right__search">
            <input
              type="text"
              className="nav__right__search__input"
              placeholder="Search Courses..."
              value={searchText}
              onChange={handleChange}
            />
            <button className="nav__right__search__button">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavBar;