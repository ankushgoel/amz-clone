import axios from "axios";
// const { default: Axios } = require("axios");

const instance = axios.create({
  baseURL: "http://localhost:5001/amz-clone-c6c8b/us-central1/api", // The API (cloud function) URL
});

export default instance;
