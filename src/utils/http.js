import axios from 'axios'

const http = axios.create({
  baseURL: 'https://react-burger-d79e5.firebaseio.com/'
});

export default http;
