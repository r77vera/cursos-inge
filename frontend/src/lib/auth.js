// lib/auth.js

export const fakeLogin = async (username, password) => {
  if (username === "admin" && password === "1234") {
    return { username: "admin", token: "secure-token" };
  }
  return null;
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("token");
};
