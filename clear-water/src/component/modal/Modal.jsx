import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { addQuiz } from "../../redux/QuizSlice";
import UserDao from "../../daos/UserDao";
import useAuthStore from "../../stores/use-auth-store";

const Modal = ({ isCorrect, onClose, preguntaSiguiente, errorMessage, correctMessage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuthStore();
  const data = useSelector((state) => state.quiz);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const quiz = {
      question: {
        isCorrect: isCorrect,
        questionNumber: preguntaSiguiente - 1,
      },
      currentQuestion: preguntaSiguiente - 1,
    };

    dispatch(addQuiz(quiz));
  }, [dispatch, isCorrect, preguntaSiguiente]);

  const handleNextQuestion = async () => {
    setLoading(true);
    const quizState = {
      email: user,
      questions: data.questions,
      currentQuestion: data.currentQuestion,
    };
    await UserDao.saveQuizState(quizState);

    const score = await UserDao.getScoreByEmail(user);

    if (score.success) {
      if (isCorrect) {
        const newScore = score.data.puntuacion + 10;
        const newScoreData = {
          puntuacion: newScore,
          email: user,
        };
        await UserDao.addScore(newScoreData);
      }
    } else {
      const points = isCorrect ? 10 : 0;
      await UserDao.addScore({ email: user, puntuacion: points });
    }

    console.log(score);
    onClose();
    navigate(preguntaSiguiente==7 ? "/home" : `/question${data.currentQuestion + 1}`);
    setLoading(false);
  };

  return (
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
          onClick={handleNextQuestion}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          {preguntaSiguiente==7 ? "Ir al home" :"Siguiente Pregunta"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
