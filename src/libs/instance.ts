import axios from 'axios';

export const INSTANCE_URL = axios.create({
  baseURL: 'http://3.35.167.178:8080/api/chat/start',
});