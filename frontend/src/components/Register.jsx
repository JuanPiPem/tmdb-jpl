import React from "react";

const Register = () => {
  return (
    <div className="register">
      <div className="background-image"></div>
      <div className="form-container">
        <form className="register-form">
          <h2>Register</h2>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div>
            <button>Register</button>
          </div>
        </form>

        <form className="login-form">
          <h2>Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
