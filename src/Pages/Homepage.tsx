import React from "react";
import "../CSS/homepage.css";
import homepageSvg from "../assets/working.svg";

const Homepage = () => {
    return (
        <div className="homepage">
        <div className="container">
            <img className="image" src={homepageSvg} alt="People in a hammock" />
        </div>
        </div>
    )
}

export default Homepage;