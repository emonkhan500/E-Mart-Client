import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {
   axios.interceptors.request.use(function(config){
  return config;
   },
   function (error) {
   return Promise.reject(error);
  }
   )
};

export default useAxiosSecure;