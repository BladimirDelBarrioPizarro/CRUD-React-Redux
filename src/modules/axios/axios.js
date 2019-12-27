import axios from 'axios';

const httpClient = axios.create({
   baseURL:'http://localhost:4000' 
});

export default httpClient;