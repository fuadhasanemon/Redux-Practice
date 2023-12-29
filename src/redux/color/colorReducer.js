import { BLUE, GOLD, GREEN, ORANGE, RED } from "./actionType";
import { initialColor } from "./initialState";

// create counter reducer

const colorReducer = (state = initialColor, { type, payload }) => {
  switch (type) {
    case RED:
      return (state = "red");

    case GREEN:
      return (state = "green");

    case BLUE:
      return (state = "blue");

    case ORANGE:
      return (state = "orange");

    case GOLD:
      return (state = "gold");

    default:
      return state;
  }
};

// export

export default colorReducer;
