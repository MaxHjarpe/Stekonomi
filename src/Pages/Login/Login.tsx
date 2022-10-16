import React from "react";
import "../Login/Login.css";
import background from "../../assets/backgroundWave.svg";


const Login = () => {
  return (
    <>
      <main className="body-tag">
      <img className="backgroundImg" src={background} alt="" />
        
        <div className="box">
          <div className="form-box">
          <h1>Välkommen</h1>
            <form action="#"></form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Lösenord" />
            <button type="submit">Logga In</button>
            <div className="create-btn">
              <a href="login">
                Skapa ett nytt konto
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
