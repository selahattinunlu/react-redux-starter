import { createReducer } from 'reduxsauce'
import { VoteActionTypes } from './../Actions/Vote'

const INITIAL_STATE = {
    aOptionVoteCounts: 0,
    bOptionVoteCounts: 0
};

const incrA = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        aOptionVoteCounts: state.aOptionVoteCounts + 1,
    };
};

const incrB = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        bOptionVoteCounts: state.bOptionVoteCounts + 1,
    };
};

const HANDLERS = {
    [VoteActionTypes.INCR_A]: incrA,
    [VoteActionTypes.INCR_B]: incrB,
};

export default createReducer(INITIAL_STATE, HANDLERS);