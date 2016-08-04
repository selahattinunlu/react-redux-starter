import { takeEvery, delay } from 'redux-saga'
import { put, take, fork } from 'redux-saga/effects'
import { VoteActionTypes } from './../Actions/Vote'

function* incrementAsyncA() {
  yield delay(1000);
  yield put({ type: 'INCR_A' });
}

function* incrementAsyncB() {
  yield delay(1000);
  yield put({ type: 'INCR_B' });
}

function* watchAsyncIncrementA() {
  while (true) {
    const action = yield take(VoteActionTypes.ASYNC_INCR_A);
    yield fork(incrementAsyncA);
  }
}

function* watchAsyncIncrementB() {
  while (true) {
    const action = yield take(VoteActionTypes.ASYNC_INCR_B);
    yield fork(incrementAsyncB);
  }
}

export default function* root() {
  yield [
    fork(watchAsyncIncrementA),
    fork(watchAsyncIncrementB),
  ];
}