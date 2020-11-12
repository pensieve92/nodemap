import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
import * as slice from '../slices/tree';
// import { updateTree, updateTreeRequest, updateTreeSuccess, updateTreeFailure } from '../slices/user';
import { logInRequest, logInSuccess, logInFailure,
    logOutFailure, logOutRequest, logOutSuccess,
    signUpFailure, signUpRequest, signUpSuccess
 } from '../slices/user';

export default function* userSaga(){
    yield all([
        fork(watchLogInRequest),
    ])
}

// 1
function* watchLogInRequest() {
    yield takeLatest(logInRequest, logInRequestSaga);
}

// 2. 요청 결과 SUCCESS, FAILURE
function* logInRequestSaga(action) {
    try {
        console.log("saga-logInSuccessSaga", action.payload);
        yield delay(1000);
        // const result = yield call(logInAPI, action.data);
        yield put(logInSuccess(action.payload));
        // throw new Error('');
    } catch (error) {
        console.log("error", error);
        console.log("saga-logInFailure", action.payload);
        yield put(logInFailure(action.payload));
    }
}

// 3. 백엔드 요청 API
// function logInAPI() {
//     retrun axios.post('/api/updateTree', data);
// }

