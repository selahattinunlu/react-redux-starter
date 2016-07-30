const INITIAL_STATE = {
    aOptionVoteCounts: 0,
    bOptionVoteCounts: 0
};

export default (state = INITIAL_STATE, action) => {
    if (!action) {
        return state;
    }

    switch (action.type) {
        case 'INCR_A':
            return Object.assign({}, state, {
                aOptionVoteCounts: state.aOptionVoteCounts + 1
            });
            break;

        case 'INCR_B':
            return Object.assign({}, state, {
                bOptionVoteCounts: state.bOptionVoteCounts + 1
            });
            break;

        default:
            return state;
            break;
    }
}