import React from "react";
import { useNavigate } from "react-router-dom";
import { addQuiz } from "../../redux/QuizSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserDao from "../../daos/UserDao";
import { useSelector } from "react-redux";
import useAuthStore from "../../stores/use-auth-store";

const Modal = ({ isCorrect, onClose, preguntaSiguiente }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuthStore();

  const data = useSelector((state) => state.quiz);

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
    const quizState = {
      email: user,
      questions: data.questions,
      currentQuestion: data.currentQuestion,
    };
    await UserDao.saveQuizState(quizState);
    onClose();
    navigate(`/question${preguntaSiguiente}`);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <h2>{isCorrect ? "¡Correcto!" : "Incorrecto"}</h2>
      <div style={{ fontSize: "50px", color: isCorrect ? "green" : "red" }}>
        {isCorrect ? "✔️" : "❌"}
      </div>
      <button
        onClick={handleNextQuestion}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: isCorrect ? "green" : "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Siguiente pregunta
      </button>
    </div>
  );
};

export default Modal;
