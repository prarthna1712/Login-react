import React from "react";
import "./login.css";
function Login() {
  return (
    <div>
      <div className="wrapper">
        <form action="">
          <h1>LOGIN</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required="" />
            <i>
              <ion-icon name="person-outline" />
            </i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="password" required="" />
            <i>
              <ion-icon name="lock-closed-outline" />
            </i>
          </div>
          <div className="remb-forget">
            <label htmlFor="">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forget password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
