export default (...funcs) => (Component) => {
  return funcs.reduce((mid, func) => {
    return func(mid);
  }, Component);
};
