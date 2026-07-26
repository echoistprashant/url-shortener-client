import api from "./api";

export const createShortUrl = async (urlData, token) => {
  const response = await api.post("/shorten", urlData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};