import { app } from "../reducers";

test("reducers", () => {
  let state = app(
    { user: { username: null, password: null } },
    { type: "LOGIN", payload: { username: "adam", password: "sdfsfsfsf" } }
  );

  expect(state).toEqual({ user: { username: "adam", password: "sdfsfsfsf" } });
});
