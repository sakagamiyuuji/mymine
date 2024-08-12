import axios from "axios";

// Pixabay API configuration
const pixabay = axios.create({
  baseURL: "https://pixabay.com/api/",
  params: {
    key: "45331527-e6d9a717ba3bbbc34048f79b7", // Your API key
  },
});

export default pixabay;
