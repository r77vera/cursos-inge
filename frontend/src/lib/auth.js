// lib/auth.js

export const fakeLogin = async (username, password) => {
  // Simular diferentes roles según el usuario
  const users = {
    admin: { username: "admin", password: "1234", role: "ADMIN" },
    vendedor: { username: "vendedor", password: "1234", role: "VENDEDOR" },
    cliente: { username: "cliente", password: "1234", role: "CLIENTE" }
  };

  const user = users[username];
  if (user && user.password === password) {
    const token = `secure-token-${user.role.toLowerCase()}`;
    return { 
      username: user.username, 
      token: token,
      role: user.role 
    };
  }
  return null;
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("token");
};
