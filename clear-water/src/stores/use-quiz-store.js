import { create } from "zustand";

const useQuizStore = create((set) => ({
  quiz: {
    correctAnswers: 0,
    incorrectAnswers: 0,
    percentageQuizCompleted: 0,
  },

  setQuiz: (quizUpdate) => {
    set((state) => ({
      quiz: {
        ...state.quiz,
        ...quizUpdate,
      },
    }));
  },
  aumentarPorcentaje: () => {
    set((state) => ({
      quiz: {
        ...state.quiz,
        percentageQuizCompleted: state.quiz.percentageQuizCompleted + 0.25,
      },
    }));
  },
}));

export default useQuizStore;
