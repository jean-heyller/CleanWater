import { useEffect, useState } from "react";
import QuizModel from "../../component/quiz-model/QuizModel";
import { QUESTION_6 } from "../../locales/water-shortage-text.json";
import { useNavigate } from "react-router-dom";

const Question6 = () => {
  const [isCorrect, setIsCorrect] = useState(null);
  const { title, solution, errorMessage, correctMessage } = QUESTION_6;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const navigate = useNavigate();
  const preguntaActual = 6;

  useEffect(() => {
    if (isCorrect !== null) {
      setModalIsOpen(true);
    }
  }, [isCorrect]);

  const goToNextQuestion = () => {
    navigate("/home"); // Cambia "/next-question" por la ruta de la siguiente pregunta
  };

  return (
    <>
      <QuizModel title="Pregunta 6" solution={solution} setIsCorrect={setIsCorrect}/>
      <div className="absolute top-0 left-0 w-full bg-black/85 text-white p-4 border-b border-gray-300 shadow-lg">
        <span className="text-blue-500 font-bold text-2xl">Pregunta 6: </span>
        <span className="text-white text-2xl">{title}</span>
      </div>
      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-lg max-h-full overflow-y-auto">
            {isCorrect ? (
              <>
                <span className="text-green-500 text-4xl">✔️</span>
                <p className="text-green-500 text-xl">{correctMessage}</p>
              </>
            ) : (
              <>
                <span className="text-red-500 text-4xl">❌</span>
                <p className="text-red-500 text-xl">{errorMessage}</p>
              </>
            )}
            <button
              onClick={goToNextQuestion}
              className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
              Ir al home
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Question6;
