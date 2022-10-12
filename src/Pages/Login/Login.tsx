import React from "react";
import "../Login/Login.css";

const Login = () => {
  return (
    <>
      <main className="body-tag">
        <div className="box">
          <div className="form-box">
            <form action="#"></form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Lösenord" />
            <button type="submit">Log In</button>
            <div className="create-btn">
              <a href="login">
                Create New Account
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
