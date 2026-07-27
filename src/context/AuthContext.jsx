import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });

  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(Boolean(token));

  useEffect(() => {
    let isMounted = true;

    const restoreUser = async () => {
      if (!token) {
        setAuthLoading(false);
        return;
      }

      try {
        const currentUser = await getCurrentUser(token);

        if (isMounted) {
          setUser(currentUser);
        }
      } catch (error) {
        console.error("Failed to restore user session:", error);

        if (isMounted) {
          setToken(null);
          setUser(null);
          localStorage.removeItem("token");
        }
      } finally {
        if (isMounted) {
          setAuthLoading(false);
        }
      }
    };

    restoreUser();

    return () => {
      isMounted = false;
    };
  }, [token]);

  const login = async (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);

    try {
      const currentUser = await getCurrentUser(newToken);
      setUser(currentUser);
    } catch (error) {
      console.error("Failed to fetch user:", error);

      setToken(null);
      setUser(null);
      localStorage.removeItem("token");
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  const value = {
    token,
    user,
    login,
    logout,
    isAuthenticated: !!token,
    authLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
