import React from "react";

const RegisterModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white/85 p-6 rounded shadow-lg w-full max-w-lg modal-enter">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default RegisterModal;