import { all, fork, put, takeLatest } from 'redux-saga/effects';
import * as slice from '../slices/tree';
import { updateTree, updateTreeRequest, updateTreeSuccess, updateTreeFailure } from '../slices/tree';
// import { UPDATE_TREE_REQUEST, 
//         UPDATE_TREE_SUCCESS, 
//         UPDATE_TREE_SUCCESS 
//     } from '../reducers/tree';


export default function* treeSaga(){
    yield all([
        fork(watchUpdateTree),
    ])
}

// 1. 비동기 액션 크리에이터 
function* watchUpdateTree() {
    yield takeLatest(updateTree, updateTreeSaga);
}

// 2. 요청 결과 SUCCESS, FAILURE
function* updateTreeSaga(action) {
    
    try {
        // const result = yield call(updateTreeAPI, action.data);
        // yield put({
        //     type: UPDATE_TREE_SUCCESS,
        //     data: action.data,
        // })
        // 이거 안되나?? >> 되네
        throw new Error('');
        yield put(updateTreeSuccess(action.data));
    } catch (error) {
        // yield put({
        //     type: UPDATE_TREE_FAILURE,
        //     error: error.response.data,
        // })
        yield put(updateTreeFailure(action.data));
    }
}

// 3. 백엔드 요청 API
// function treeUPdateAPI() {
//     retrun axios.post('/api/updateTree', data);
// }