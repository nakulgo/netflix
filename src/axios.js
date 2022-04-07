import axios from "axios";

// base url to make future requests
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;