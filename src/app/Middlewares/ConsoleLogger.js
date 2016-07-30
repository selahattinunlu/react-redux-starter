export default ({getState, dispatch}) => {
    return (next) => (action) => {
        // to get current state =====> getState();
        // to access dispatch ====> dispatch(...);
        console.log("CONSOLE LOGGER::: ActionType: " + action.type);
        return next(action);
    }
};