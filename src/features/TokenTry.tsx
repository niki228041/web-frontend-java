import axios from 'axios';
import { GetAccessToken } from '../api/jwtDecodeToken';

const instance = axios.create({
  baseURL: 'http://localhost:8083',
});

const token = GetAccessToken();

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;


export default instance;