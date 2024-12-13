// filepath: /c:/Users/heyller.palomino_pra/Documents/proyecto final PI/CleanWater/clear-water/src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import rewardsReducer from "./RewardsSlice";
import { quizSlice } from "./QuizSlice";

export const store = configureStore({
    reducer: {
        rewards: rewardsReducer,
        quiz: quizSlice.reducer,
    },
});

export default store;