import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e6233892f35646ba8d0cd5263a02dff0'
  }
});
