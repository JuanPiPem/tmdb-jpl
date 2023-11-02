import React from "react";

const RegisterForm = ({ formData, handleInputChange, handleRegister }) => {
  return (
    <form className="register-form" onSubmit={handleRegister}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
