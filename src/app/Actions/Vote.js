export default {
    increaseA: () => {
        return {
            type: 'INCR_A'
        }
    },

    increaseB: () => {
        return {
            type: 'INCR_B'
        }
    },
    asyncIncreaseA: () => {
        return {
            type: 'ASYNC_INCR_A'
        }
    },
    asyncIncreaseB: () => {
        return {
            type: 'ASYNC_INCR_B'
        }
    }
};