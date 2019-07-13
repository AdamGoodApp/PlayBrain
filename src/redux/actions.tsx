import { LOGIN } from "./actionTypes";

interface User {
  username: String;
  password: String;
}

export const login = (user: User) => {
  return { type: LOGIN, payload: user };
};
