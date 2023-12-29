// create counter reducer

import { DESC, INC, OT, RAND, RESET } from "./actionType";
import { initialState } from "./initialState";

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INC:
      return (state = state + 1);

    case DESC:
      return (state = state - 1);

    case RESET:
      return (state = 0);

    case RAND:
      return (state = payload);

    case OT:
      return (state = 1000);

    default:
      return state;
  }
};

// export
export default counterReducer;
