import React from "react";
import "../Login/Login.css";

const Login = () => {
  return (
    <>
      <main className="main-block">
        <div className="block">
          <h1 className="h1-styling">Välkommen</h1>
          <div className="block-for-text">
            <div className="inside-text">
              <p className="inside-block">Email</p>
            </div>
            <div className="inside-text">
              <p className="inside-block">...</p>
            </div>
          </div>
          <div className="block-for-text">
            <div className="inside-text">
              <p className="inside-block">Lösenord</p>
            </div>
            <div className="inside-text">
              <p className="inside-block">...</p>
            </div>
          </div>
          <button className="button-stylig-login">Logga in</button>
        </div>
      </main>
    </>
  );
};

export default Login;
