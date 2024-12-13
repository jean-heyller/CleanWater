import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentQuestion: 0,
    questions: [],
}

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        addQuiz: (state, action) => {
            const exists = state.questions.some(
                (question) => question.questionNumber === action.payload.question.questionNumber
            );

            if (!exists) {
                state.questions.push(action.payload.question);
                state.currentQuestion = action.payload.currentQuestion;
            }
        },

        setQuiz: (state, action) => {
            state.questions = action.payload.questions;
            state.currentQuestion = action.payload.currentQuestion;
        },
    },
});

export const { addQuiz,setQuiz } = quizSlice.actions;

export default quizSlice.reducer;