import React from "react";
import "../CSS/homepage.css";
import homepageSvg from "../assets/homepageSvg.svg";
import background from "../assets/backgroundWave.svg";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
    <main>
      <img className="backgroundImg" src={background} alt="" />
      <div className="homepage">
        <div className="image__container">
          <img
            className="image"
            src={homepageSvg}
            alt="two people sitting on a car hood"
          />
        </div>
        <div className="homepage__button__container">
          <h1>Är du student?</h1>
          <p className="text">
            <b>Behöver du mer koll på din ekonomi? Skapa en budget hos oss!</b>
          </p>
          <Link to="/budget">
            <button className="homepage__button"><b>Skapa</b></button>
          </Link>
        </div>
      </div>
    </main>
    </>
  );
};

export default Homepage;
