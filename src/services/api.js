import axios from 'axios';

export const api = axios.create({
  base_url: 'http://api.github.com',
});
