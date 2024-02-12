import axios from "axios";
const API_URL = "http://localhost:8000";

const headers = {
  "Content-Type": "multipart/form-data",
};

export const getSignedUrl = async () => {
  try {
    const response = await axios.get(`${API_URL}/image-url`);
    return response.data;
  } catch (error) {
    console.log("error while calling api", error.message);
    return error.response.data;
  }
};

export const upoadFile = async (url, file) => {
  try {
    const response = await axios.put(url, file, { headers: headers });
  } catch (error) {
    console.log("error while calling api", error.message);
    return error.response.data;
  }
};
