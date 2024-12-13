import { useState, useEffect } from "react";
import QuizModel from "../../component/quiz-model/QuizModel";
import { QUESTION_4 } from "../../locales/water-shortage-text.json";
import Modal from "../../component/modal/Modal";

const Question4 = () => {
  const { title, solution, errorMessage, correctMessage } = QUESTION_4;
  const [isCorrect, setIsCorrect] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const preguntaActual = 4;

  useEffect(() => {
    if (isCorrect !== null) {
      setModalIsOpen(true);
    }
  }, [isCorrect]);

  return (
    <>
      <QuizModel
        title="Pregunta 4"
        solution={solution}
        setIsCorrect={setIsCorrect}
      />
      <div className="absolute top-0 left-0 w-full bg-black/85 text-white p-4 border-b border-gray-300 shadow-lg">
        <span className="text-blue-500 font-bold text-2xl">Pregunta 4: </span>
        <span className="text-white text-2xl">{title}</span>
      </div>
      {modalIsOpen && (
        <Modal
          isCorrect={isCorrect}
          onClose={() => setModalIsOpen(false)}
          preguntaSiguiente={preguntaActual + 1}
          errorMessage={errorMessage}
          correctMessage={correctMessage}
        />
      )}
    </>
  );
};

export default Question4;
