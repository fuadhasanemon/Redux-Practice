// Export countet actions

import { DESC, INC, OT, RAND, RESET } from "./actionType";

export const counterInc = () => {
  return { type: INC };
};

export const counterDesc = () => {
  return { type: DESC };
};

export const counterReset = () => {
  return { type: RESET };
};

export const counterOt = () => {
  return { type: OT };
};

export const counterRandom = payload => {
  return {
    type: RAND,
    payload: payload
  };
};
