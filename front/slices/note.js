
import {createSlice} from "@reduxjs/toolkit";
import shortid from 'shortid';
import faker from 'faker';

const noteSlice = createSlice({
	name: "note",
	initialState: {
        notePath: {},
        noteContent : "",       
        logInLoading: false,
        logInDone: false,
        logInError: null,       
	},
	reducers: {
        // FIXME 2단계 메뉴 검증 필요
        notePathUpdate:(state, action) => {
            const {notePath} = action.payload;
            state.notePath = notePath;
        },
        noteContentRequest:(state, action) => { // Request에서 초기화 해주는 개념인듯
            state.logInLoading = true;
            state.logInDone = false;
            state.logInError = null;
            console.log("slice-noteContentRequest", action.payload); // 1.
        },
        noteContentSuccess:(state, action) => {            
            state.logInLoading = false;
            state.logInDone = true;      
            console.log("slice-noteContentSuccess", action.payload);
        },
        noteContentFailure:(state, action) => {
            state.logInLoading = false;
            state.logInDone = true;
            state.logInError = action.error;
            console.log("slice-noteContentFailure", action.payload);
        },
	},
	
});

export const { 
    notePathUpdate,
    logInRequest, logInSuccess, logInFailure, 
}   = noteSlice.actions; 
export const sName = noteSlice.name;
export default noteSlice.reducer;
