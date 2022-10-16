import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../CSS/footer.css";
// import waveSvg from "../assets/wave.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* <img className="waves" src={waveSvg} alt="wavy lines" /> */}

        <div className="footer__container">
          <div className="footer__header">
            <NavLink className="footerlink" to="/budget"><p><b>Skapa budget</b></p></NavLink>
            <NavLink className="footerlink" to="/budgets"><p><b>Min ekonomi</b></p></NavLink>
            <NavLink className="footerlink" to="/login"><p><b>Login</b></p></NavLink>
          </div>
          <div className="footer__header">
            <h2>Copyright</h2>
            <div className="footer__header__item">
              <p>©MAGA</p>
                <p className="names"><b>M</b>ax, <b>A</b>nton, <b>G</b>ustaf, <b>A</b>dam</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
