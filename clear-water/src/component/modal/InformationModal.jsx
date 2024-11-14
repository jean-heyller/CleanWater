import React from "react";
import arrowRight from "/public/img/arrow-right.png";
import arrowLeft from "/public/img/arrow-left.png";
import escKey from "/public/img/esc-key.png";
import "./InformationModal.css";

const InformationModal = ({ isModalOpen, handleCloseModal, data }) => {
  const { title, description } = data;
  return (
    isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
        <div className="relative bg-black/75 p-10 rounded shadow-lg max-w-lg w-full mx-4 text-white">
          <button
            className="absolute top-2 right-2 text-white-600 hover:text-white-900 text-2xl"
            onClick={handleCloseModal}
          >
            &#x2715; {/* Unicode para la "X" */}
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
          <p className="mb-4">{description}</p>
          <div className="flex justify-center mt-4 space-x-8">
            <div className="flex flex-col items-center">
              <img src={arrowLeft} alt="Flecha Izquierda" className="w-8 h-8 button-image" />
              <span className="text-sm">Anterior</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={arrowRight} alt="Flecha Derecha" className="w-8 h-8 button-image" />
              <span className="text-sm">Siguiente</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mouse">
                <div className="mouse-icon">
                  <span className="mouse-wheel"></span>
                </div>
              </div>
              <span className="text-sm">Navegar</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={escKey} alt="Tecla Escape" className="w-8 h-8 button-image" />
              <span className="text-sm">Volver</span>
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <span className="text-sm">
              Usa las flechas o el scroll para navegar entre problemas y la tecla ESC para
              volver al inicio.
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default InformationModal;
