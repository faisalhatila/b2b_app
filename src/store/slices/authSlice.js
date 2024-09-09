import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        userData: {},
    },
    reducers: {
        login: (state, action) => {
            state.userData = action.payload;
        },
        logout: (state) => {
            state.userData = {};
        },
    },
});

export const { login, logout, getWorkSpace, getEmployeeDetails } =
    authSlice.actions;
export default authSlice.reducer;
