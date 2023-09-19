import axios from 'axios' 

const api = axios.create({
  baseURL: import.meta.env.APP_URL_SERVIDOR,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

api.interceptors.request.use(
  async (config) => {
  //   let data = JSON.parse(localStorage.getItem('data'))

  //   if(data){
  //     const token = data.data.token
  //     if (token) {
  //       config.headers.Authorization = `Bearer ${token}`;
  //     }
  // } 
    return config;
  }, 
); 
export default api
