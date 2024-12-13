import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const rewardsSlice = createSlice({
    name: "rewards",
    initialState,
    reducers: {
        setRewards: (state, action) => {
            return action.payload; // Devuelve el nuevo estado
        }
    },
});

export const { setRewards } = rewardsSlice.actions;
export default rewardsSlice.reducer;