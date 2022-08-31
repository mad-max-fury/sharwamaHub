import axios from "axios";

const sharwamaHub = axios.create({
  baseURL: "https://api.sharwamahub.com/api/v1",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default sharwamaHub;
