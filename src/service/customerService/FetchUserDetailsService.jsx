import axios from "axios";
const FETCH_USER_URL="http://localhost:80/internal/mms-portal/medicalManagementSystem/v1/customer/fetchUser/sd12345";
const REGISTER_CUSTOMER="http://localhost:80/internal/mms-portal/medicalManagementSystem/v1/customer/registration";

class FetchUserDetailsService{
    // const FETCH_USER_URL="http://localhost:80/internal/mms-portal/medicalManagementSystem/v1/customer/fetchUser/am12345";
  
    fetchUser(){
        return axios.get(FETCH_USER_URL);
    }

    registerCustomer(customer){
        return axios.post(REGISTER_CUSTOMER, customer);
    }

}

export default new FetchUserDetailsService()