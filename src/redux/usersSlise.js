import { createSlice } from '@reduxjs/toolkit';

import { fetchFollow, fetchUsers } from './operations';
import axios from "axios";

axios.defaults.baseURL = "https://6458a0d48badff578ef6314e.mockapi.io";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

 const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null
    
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
    })
    .addCase(fetchFollow.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const updatedUser = action.payload;
        const userIndex = state.items.findIndex(
            (user) => user.id === updatedUser.id
        );
        if (userIndex >= 0) {
            state.items[userIndex] = updatedUser;
        }
    })
    .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
    .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
    )
}
})

export const usersReducer =  usersSlice.reducer;
