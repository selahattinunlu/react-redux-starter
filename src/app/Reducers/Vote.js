import { createReducer } from 'reduxsauce'
import { VoteActionTypes } from './../Actions/Vote'
import Immutable from 'immutable';

const INITIAL_STATE = Immutable.Map({
    aOptionVoteCounts: 0,
    bOptionVoteCounts: 0
});

const incrA = (state = INITIAL_STATE, action) => {
    return state.set('aOptionVoteCounts', state.get('aOptionVoteCounts') + 1);
};

const incrB = (state = INITIAL_STATE, action) => {
    return state.set('bOptionVoteCounts', state.get('bOptionVoteCounts') + 1);
};

const HANDLERS = {
    [VoteActionTypes.INCR_A]: incrA,
    [VoteActionTypes.INCR_B]: incrB,
};

export default createReducer(INITIAL_STATE, HANDLERS);