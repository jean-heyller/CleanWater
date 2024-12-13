import { configureStore } from "@reduxjs/toolkit";
import rewardsReducer from "./userSlice";
import { quizSlice } from "./QuizSlice";

export const store = configureStore({
    reducer: {
        rewards: rewardsReducer,
        quiz: quizSlice.reducer, // Add this line
    },
});

export default store;