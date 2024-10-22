import React from "react";
import GoogleButton from "../button/GoogleButton";

const RegisterForm = () => {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Nombre de usuario
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Registrarse
        </button>
        <div className="mt-4">
          <GoogleButton type="register" />
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;