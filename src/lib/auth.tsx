const ADMINS = ["adamgoodapp", "unclebob", "jimmy"];
const USERS = ["michael", "bobby", "mary"];

export const isAdmin = (username: string) => {
  return ADMINS.includes(username);
};

export const isUser = (username: string) => {
  return USERS.includes(username);
};

export const userType = (username: string) => {
  const usr = username.toLowerCase();

  if (isAdmin(usr)) {
    return "ADMIN";
  } else if (isUser(usr)) {
    return "USER";
  } else {
    return "GUEST";
  }
};
