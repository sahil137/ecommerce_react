import endpoints from "../endpoints.js";
import axiosClient from "../index.js";

const userService = {
  createUser: (data) => axiosClient.post(endpoints.user.createUser, data),
};

export default userService;
