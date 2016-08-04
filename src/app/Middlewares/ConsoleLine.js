export default (middlewareFunc) => {
  return (next) => (action) => {
    // to get state => middlewareFunc.getState();
    // to access dispatch => middlewareFunc.dispatch(...);
    console.log('-----------------------------------------');
    return next(action);
  }
};