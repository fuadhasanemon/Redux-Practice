// create test middleware

export const testRedux = store => next => action => {
  console.log("I am ready");
  next(action);
};
