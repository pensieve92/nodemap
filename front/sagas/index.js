import {all, fork} from 'redux-saga/effects';

import treeSaga from './tree';

export default function* rootSaga() {
    yield all([
        fork(treeSaga),
    ])
}