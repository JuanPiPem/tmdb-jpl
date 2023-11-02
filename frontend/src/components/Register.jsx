import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    loginEmail: "",
    loginPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Lógica para el registro del usuario
    axios
      .post("http://localhost:3001/api/users/register", {
        name: formData.name,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        if (response.status === 201) {
          console.log("Registro exitoso");
        }
      })
      .catch((error) => {
        console.error("Error al registrar usuario:", error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para el inicio de sesión del usuario
    axios
      .post("http://localhost:3001/api/users/login", {
        email: formData.loginEmail,
        password: formData.loginPassword,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Inicio de sesión exitoso");
        }
      })
      .catch((error) => {
        console.error("Error al iniciar sesión:", error);
      });
  };

  return (
    <div className="register">
      <div className="background-image"></div>
      <div className="form-container">
        <form className="register-form">
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
            <button onClick={handleRegister}>Register</button>
          </div>
        </form>

        <form className="login-form">
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
            <button onClick={handleLogin}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
