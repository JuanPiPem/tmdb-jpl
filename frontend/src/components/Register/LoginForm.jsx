import React from "react";

const LoginForm = ({ formData, handleInputChange, handleLogin }) => {
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <input
        type="email"
        name="loginEmail"
        placeholder="Email"
        value={formData.loginEmail}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="loginPassword"
        placeholder="Password"
        value={formData.loginPassword}
        onChange={handleInputChange}
      />
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
