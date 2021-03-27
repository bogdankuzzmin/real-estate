import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://real-estate-d3ed1-default-rtdb.firebaseio.com/'
});

export default instance;

