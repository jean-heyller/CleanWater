import { configureStore } from "@reduxjs/toolkit";
import { rewardsReducer } from "./RewardsSlice";
import { quizSlice } from "./QuizSlice";

export const store = configureStore({
    reducer: {
        rewards: rewardsReducer.reducer,
        quiz: quizSlice.reducer, // Add this line
    },
});

export default store;