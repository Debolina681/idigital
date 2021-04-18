import axios from 'axios';

class PaymentService {

    getPayment(){
        return axios.get("http://localhost:8080/api/payments/all");
    }
    addPayment(payment){
        return axios.post("http://localhost:8080/api/payments/insert",payment);
    }
    deletePayment(paymentId){
        return axios.delete("http://localhost:8080/api/payments/delete"+'/'+ paymentId);
    }
    

    
}

export default new PaymentService()