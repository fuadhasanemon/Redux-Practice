import { CHANGE } from "./actionType";

export const changeBgImg = payload => {
  return { type: CHANGE, payload: payload };
};
