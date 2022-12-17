import axios from "axios";

const API_URL = "https://api.github.com/users/{user}/repos";

const getReposFromUser = (user: string) => {
  return axios.get(API_URL.replace("{user}", user));
};

const GitHubService = {
  getReposFromUser,
};

export default GitHubService;
