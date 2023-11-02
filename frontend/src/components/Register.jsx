import React, { useState } from "react";
import axios from "axios";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

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
        <RegisterForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleRegister={handleRegister}
        />

        <LoginForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
};

export default Register;
