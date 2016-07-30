import { createTypes } from 'reduxsauce'

export const VoteActionTypes = createTypes(`
    INCR_A
    INCR_B
    ASYNC_INCR_A
    ASYNC_INCR_B
`);

export default {
    increaseA: () => {
        return {
            type: VoteActionTypes.INCR_A,
        }
    },

    increaseB: () => {
        return {
            type: VoteActionTypes.INCR_B,
        }
    },
    asyncIncreaseA: () => {
        return {
            type: VoteActionTypes.ASYNC_INCR_A,
        }
    },
    asyncIncreaseB: () => {
        return {
            type: VoteActionTypes.ASYNC_INCR_B,
        }
    }
};