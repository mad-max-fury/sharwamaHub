import axios from "axios";

const sharwamaHub = axios.create({
  baseURL: "http://sharwamahub-api.test",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default sharwamaHub;
