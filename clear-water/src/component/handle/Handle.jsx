import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Handle = () => {
    const data = useSelector((state) => state.quiz);
    const navigate = useNavigate();

    const { currentQuestion, questions } = data;

    const startQuiz = () => {
        navigate(`/question1`);
    };

    const resumeQuiz = () => {
        navigate(`/question${currentQuestion + 1}`);
    };

    return (
        <div className="bg-[url('/img/ocean.webp')] bg-cover bg-center h-screen flex flex-col items-center justify-center">
            <button 
                onClick={startQuiz} 
                className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mb-4 transition duration-300 ease-in-out transform hover:scale-105"
            >
                Empezar Quiz desde Cero
            </button>
            {currentQuestion !== 0 && (
                <button 
                    onClick={resumeQuiz} 
                    className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Retomar Quiz
                </button>
            )}
        </div>
    );
};

export default Handle;