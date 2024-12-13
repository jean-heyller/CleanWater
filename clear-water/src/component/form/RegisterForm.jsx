import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/use-auth-store";
import GoogleButton from "../button/GoogleButton";
import ErrorMessage from "../error/ErrorMessage";
import Swal from "sweetalert2";
import {
  validateName,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/FormValidator";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const { registerWithForm } = useAuthStore();

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = async () => {
    const newErrors = {};
    const nameErrors = await validateName(formData.name);
    if (nameErrors.length > 0) newErrors.name = nameErrors.join(", ");

    const passwordErrors = validatePassword(formData.password);
    if (passwordErrors.length > 0)
      newErrors.password = passwordErrors.join(", ");

    const confirmPasswordErrors = validateConfirmPassword(
      formData.password,
      formData.confirmPassword
    );
    if (confirmPasswordErrors.length > 0)
      newErrors.confirmPassword = confirmPasswordErrors.join(", ");

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = await validate();
    console.log(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const registerError = (await registerWithForm(formData))
        ? null
        : "El correo electrónico ya está registrado";
      if (registerError)
        Swal.fire({
          icon: "error",
          title: "Error",
          text: registerError,
        });
      else {
        console.log("Registro Exitoso");
        navigate("/world");
      }
    }
  };

  useEffect(() => {
    const validatePasswords = () => {
      const newErrors = { ...errors };
      const confirmPasswordErrors = validateConfirmPassword(
        formData.password,
        formData.confirmPassword
      );
      if (confirmPasswordErrors.length > 0) {
        newErrors.confirmPassword = confirmPasswordErrors.join(", ");
      } else {
        delete newErrors.confirmPassword;
      }
      setErrors(newErrors);
    };

    validatePasswords();
  }, [formData.confirmPassword]);

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Correo electrónico
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
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
        <ErrorMessage message={errors.name} />
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
        <ErrorMessage message={errors.password} />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Confirmar contraseña
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
        <ErrorMessage message={errors.confirmPassword} />
      </div>
      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Registrarse
        </button>
        <p className="text-center text-gray-500 my-4">o bien puede</p>
        <GoogleButton
          type="register"
          navigateTo={navigate}
          useAuthStore={useAuthStore}
        />
      </div>
    </form>
  );
};

export default RegisterForm;
