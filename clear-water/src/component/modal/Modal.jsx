import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { addQuiz } from "../../redux/QuizSlice";
import UserDao from "../../daos/UserDao";
import useAuthStore from "../../stores/use-auth-store";

const Modal = ({ isCorrect, onClose, preguntaSiguiente }) => {
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
    navigate(`/question${data.currentQuestion + 1}`);
    setLoading(false);
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
      {loading ? (
        <div className="flex justify-center items-center">
          <ClipLoader size={30} color={"#123abc"} loading={loading} />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Modal;