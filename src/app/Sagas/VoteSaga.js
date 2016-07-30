import { takeEvery, delay } from 'redux-saga'
import { put, take, fork } from 'redux-saga/effects'

function* incrementAsyncA() {
    yield delay(1000);
    yield put({ type: 'INCR_A' });
}

function* incrementAsyncB() {
    yield delay(1000);
    yield put({ type: 'INCR_B' });
}

function* watchIncrementAsync() {
    while (true) {
        const action = yield take('ASYNC_INCR_A');
        yield fork(incrementAsyncA);
    }
}

function* watchDecrementAsync() {
    while (true) {
        const action = yield take('ASYNC_INCR_B');
        yield fork(incrementAsyncB);
    }
}

export default function* root() {
    yield [
        fork(watchIncrementAsync),
        fork(watchDecrementAsync),
    ];
}