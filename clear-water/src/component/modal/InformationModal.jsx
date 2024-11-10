import React from "react";

const InformationModal = ({ isModalOpen, handleCloseModal, data }) => {
  const { title, description } = data;
  return (
    isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white/50 p-10 rounded shadow-lg max-w-lg w-full mx-4">
        <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            onClick={handleCloseModal}
          >
            &#x2715; {/* Unicode para la "X" */}
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
          <p className="mb-4">{description}</p>
        </div>
      </div>
    )
  );
};

export default InformationModal;
