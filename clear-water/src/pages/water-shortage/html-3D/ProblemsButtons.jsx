import { Html } from "@react-three/drei";

const ProblemsButtons = ({ handleOpenModal, isModalOpen}) => {
  return (
    <Html occlude position={[-20, 12, -15]}>
      <div className={`absolute right-9 flex flex-col space-y-4 ${isModalOpen ? 'pointer-events-none' : ''}`}>
        <button
          className="bg-violet-500/60 hover:bg-violet-700/50 text-white font-bold py-2 px-10 rounded"
          onClick={handleOpenModal}
        >
          Descripción
        </button>
        <button className="bg-green-500/60 hover:bg-green-700/50 text-white font-bold py-2 px-10 rounded">
          Problema
        </button>
        <button className="bg-red-500/60 hover:bg-red-700/50 text-white font-bold py-2 px-10 rounded">
          problema
        </button>
      </div>
    </Html>
  );
};

export default ProblemsButtons;
