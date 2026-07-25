import api from "./api";

export const signup = async (userData) => {
  const response = await api.post("/signup", userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post("/login", credentials);
  return response.data;
};

export const getCurrentUser = async (token) => {
  const response = await api.get("/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};