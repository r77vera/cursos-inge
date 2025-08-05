"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      const token = document.cookie.split('; ').find(row => row.startsWith('auth-token='));
      const username = localStorage.getItem("username");
      const role = localStorage.getItem("role");
      if (token && username && role) {
        setUser({ username, role });
      }
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const login = ({ username, token, role }) => {
    // Establecer cookie con el token
    document.cookie = `auth-token=${token}; path=/; max-age=86400; samesite=strict`;
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);
    setUser({ username, role });
  };

  const logout = () => {
    document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    localStorage.clear();
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
