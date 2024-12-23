import axios from 'axios';

// http://localhost:8080/gym/customers

const apiClient = axios.create(

    //object
   {
    //spring-boot API
    baseURL : 'http://localhost:8080/gym'
   }
);

// Get Data
export const getGymDetailsAPI = () => apiClient.get('/customers');



