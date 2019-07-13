import { LOGIN } from "./actionTypes";

const initialState = {
  user: {
    username: null,
    password: null
  }
};

export const app = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: { ...payload }
      };
    default:
      return state;
  }
};
