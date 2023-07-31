import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:7036/'
})

export default api;