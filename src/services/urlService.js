import api from "./api";

export const createShortUrl = async (urlData, token) => {
  const response = await api.post("/shorten", urlData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};


export const getMyUrls = async (token) => {
  const response = await api.get("/my-urls", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};