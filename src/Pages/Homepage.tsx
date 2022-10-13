import React from "react";
import "../CSS/homepage.css";
import homepageSvg from "../assets/homepageWave.svg";
import background from "../assets/background.svg";

const Homepage = () => {
  return (
    <>
      <img className="backgroundImg" src={background} alt="" />
      <div className="homepage">
        <div className="image__container">
          <img className="image" src={homepageSvg} alt="two people sitting on a car hood" />
        </div>
        <div className="homepage__button__container">
            <h1>Är du student?</h1>
            <p className="text">Behöver du mer koll på din ekonomi? Skapa en budget hos oss!</p>
          <button className="homepage__button">Skapa</button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
