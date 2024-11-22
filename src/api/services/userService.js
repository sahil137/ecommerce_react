import endpoints from "../endpoints.js";
import axiosClient from "../index.js";

const userService = {
  createUser: (data) => axiosClient.post(endpoints.user.createUser, data),
  getCurrentUser: () => axiosClient.get(endpoints.user.getCurrentUser),
};

export default userService;
