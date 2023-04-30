import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

const fetchArticlesWithQuery = async (searchQuery, page = 0) => {
  const response = await axios.get(
    `/search?query=${searchQuery}&page=${page}&hitsPerPage=5`
  );
  return response.data.hits;
};

const api = {
  fetchArticlesWithQuery,
};

export default api;
