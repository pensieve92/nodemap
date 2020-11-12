
import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
        logInLoading: false,
        logInDone: false,
        logInError: null,
        logOutLoading: false,
        logOutDone: false,
        logOutError: null,
        signUpLoading: false,
        signUpDone: false,
        signUpError: null,
        me: null,
        signUpData: {},
        loginData:{}
	},
	reducers: {
        logInRequest:(state, action) => { // Request에서 초기화 해주는 개념인듯
            state.logInLoading = true;
            state.logInDone = false;
            state.logInError = null;
            console.log("slice-logInRequest",action.payload); // 1.
        },
        logInSuccess:(state, action) => {            
            state.logInLoading = false;
            state.logInDone = true;      
            console.log("slice-logInSuccess", action.payload);
            // state.me = dummyUser(action.payload);
        },
        logInFailure:(state, action) => {
            state.logInLoading = false;
            state.logInDone = true;
            state.logInError = action.error;
            console.log("slice-logInFailure", action.payload);
        },
        logOutRequest:(state, action) => {
            state.logOutLoading = true;
            state.logOutDone    = false;
            state.logOutError   = null;
        },
        logOutSuccess:(state, action) => {
            state.logOutLoading = false;
            state.logOutDone    = true;
            state.me = null;
        },
        logOutFailure:(state, action) => {
            state.logOutLoading = false;
            state.logOutDone    = true;
            state.logOutError   = action.error;
        },
        signUpRequest:(state, action) => {
            state.signUpLoading = true;
            state.signUpDone    = false;
            state.signUpError   = null;

        },
        signUpSuccess:(state, action) => {
            state.signUpLoading = false;
            state.signUpDone    = true;
            state.signUpError   = null;
        },
        signUpFailure:(state, action) => {
            state.signUpLoading = false;
            state.signUpDone    = true;
            state.signUpError   = action.error;            
        },
	},
	// extraReducers: {
	// 	[HYDRATE]: (state, action) => action.payload.clock
	// }
});

// export const selectClock = state => state.clock;

export const { 
    logInRequest, logInSuccess, logInFailure, 
    logOutRequest, logOutSuccess, logOutFailure,
    signUpRequest, signUpSuccess, signUpFailure    
}   = userSlice.actions; // reducers에 updateUser가 action으로 
export const sName = userSlice.name;
// export const sActions = treeSlice.actions;
export default userSlice.reducer;
