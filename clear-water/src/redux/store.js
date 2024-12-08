import { configureStore } from "@reduxjs/toolkit";
import rewardsReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        rewards: rewardsReducer,
    },
});



export default store;