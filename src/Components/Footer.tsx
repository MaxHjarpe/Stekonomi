import React from "react";
import "../CSS/footer.css";
import waveSvg from "../assets/wave.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__header">
            <h3>Webbdesign</h3>
            <div className="footer__header__item">
              <p>UI/UX</p>
            </div>
          </div>
          <div className="footer__header">
            <h3>Copyright</h3>
            <div className="footer__header__item">
              <p>©MAGA</p>
            </div>

          </div>
        </div>
        <img className="waves" src={waveSvg} alt="wavy lines" />
      </footer>
    </>
  );
};

export default Footer;
