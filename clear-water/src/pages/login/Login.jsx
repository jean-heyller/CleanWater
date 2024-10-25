import React, { useState } from "react";
import LoginForm from "../../component/form/LoginForm";
import Logo from "../../component/logo/Logo";
import Title from "../../component/title/Title"
import RegisterModal from "../../component/modal/RegisterModal";
import RegisterForm from "../../component/form/RegisterForm";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center bg-[url('/img/background.jpg')]">
      <div className="bg-gradient-to-r from-gray-400/50 to-gray-600/50 p-8 rounded shadow-md text-center">
        <Logo />
        <Title text="El agua es vida; no mates nuestro futuro." color="white" />
        <LoginForm />
        <div className="mt-4">
          <button 
            className="w-full px-4 py-2 text-white bg-red-600/80 rounded-md hover:bg-red-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={openModal}
          >
            Si eres nuevo, regístrate aquí
          </button>
        </div>
      </div>
      <RegisterModal isOpen={isModalOpen} onClose={closeModal}>
        <RegisterForm />
      </RegisterModal>
    </div>
  );
};
export default Login;
