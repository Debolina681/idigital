import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8080/grocery";

class UserService {
    login(user){
        console.log("get Valid User only");
        return axios.post(USER_API_BASE_URL + '/login',user);
    }
    
    registrationForm(user){
        console.log("create customer account");
         let a = axios.post(USER_API_BASE_URL+'/register',  user);
         console.log(a);
         return a
        }
}
export default new UserService()