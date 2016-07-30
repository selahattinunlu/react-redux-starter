import { fork } from 'redux-saga/effects'
import VoteSaga from './VoteSaga'

export default function* rootSaga() {
    yield [
        fork(VoteSaga)
    ]
}