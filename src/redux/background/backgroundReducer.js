import { CHANGE } from "./actionType";
import { initialImage } from "./initialState";

// create counter reducer
const backgroundReducer = (state = initialImage, { type, payload }) => {
  switch (type) {
    case CHANGE:
      return (state = payload);

    default:
      return state;
  }
};

// export

export default backgroundReducer;
