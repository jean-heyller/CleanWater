import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "../button/GoogleButton";
import Title from "../title/Title";
import ErrorMessage from "../error/ErrorMessage";
import Swal from "sweetalert2";
import { validateFormLogin } from "../../utils/FormValidator";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = async() => {
    
    const loginErrors = await validateFormLogin(formData);
    const newErrors = loginErrors.length > 0 ? loginErrors.join(", ") : null;

    return newErrors;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationErrors = await validate();
    console.log(validationErrors);
    
    if (validationErrors) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: validationErrors,
      });
    } else {
      console.log("Login Exitoso");
      navigate("/world");
    }
  };

  return (
    <div className="w-full max-w-md p-4 bg-white/60 rounded shadow-md">
      <Title text="Iniciar Sesión" fontSize="small" />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Iniciar Sesión
        </button>
        <p className="text-center text-gray-600">O si creaste tu cuenta con Google</p>
        <GoogleButton type="login" navigateTo={navigate}/>
      </form>
    </div>
  );
};

export default LoginForm;
