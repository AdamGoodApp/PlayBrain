import { userType } from "../auth";

const TYPES = {
  admin: "ADMIN",
  user: "USER",
  guest: "GUEST"
};

test("is admin", () => {
  let username: string = "adamgoodapp";

  expect(userType(username)).toEqual(TYPES.admin);
});

test("is user", () => {
  let username: string = "michael";

  expect(userType(username)).toEqual(TYPES.user);
});

test("is guest", () => {
  let username: string = "naruto";

  expect(userType(username)).toEqual(TYPES.guest);
});
