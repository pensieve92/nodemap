import {all, fork} from 'redux-saga/effects';

import treeSaga from './tree';
import userSaga from './user';

export default function* rootSaga() {
    yield all([
        fork(treeSaga),
        fork(userSaga),
    ])
}