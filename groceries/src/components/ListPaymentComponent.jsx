import React, { Component } from 'react'
import PaymentService from '../services/PaymentService'
//import PaymentService from '../services/PaymentService'
import './ListPayment.css';

class ListPaymentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                payments: []
        }
        this.addPayment = this.addPayment.bind(this);
        this.deletePayment = this.deletePayment.bind(this);
    }

    deletePayment(id){
        PaymentService.deletePayment(id).then( res => {
            this.setState({payments: this.state.payments.filter(payment => payment.id !== id)});
        })
    }

   
   componentDidMount(){
       PaymentService.getPayment().then((res) =>{
           this.setState({ payments: res.data});

       });
   }
   addPayment(){
    this.props.history.push('/AddPaymentComponent');
}
    render() {
        return (
            <div className="list">
            <div>
                 <h2 className="text-center">Payment List</h2>
                 <div className = "row" style={{marginLeft:"10px"}}>
                    <button className="btn btn-primary" onClick={this.addPayment}> Add Payment</button>
                 </div>
                 <br></br>
                 <div className = "row"  style={{marginLeft:"10px"}}>
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Payment Mode</th>
                                    <th> Card Number</th>
                                    <th> Card Holder Name</th>
                                    <th> Expiry Date</th>
                                     <th> CVV</th>
                                    <th> Otp</th>
                                    <th> Amount</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.payments.map(
                                        payment => 
                                        <tr key = {payment.id}>
                                             
                                    <td> { payment.paymentMode }</td>
                                    <td>{ payment.cardNumber }</td>
                                    <td> { payment.cardHolderName }</td>
                                    <td> { payment.expiryDate }</td>
                                     <td> {payment.cvv }</td>
                                    <td>{ payment.otp}</td>
                                    <td>  { payment.amount}</td>
                                    
                                             <td>
                                                 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePayment(payment.id)} className="btn btn-danger">Delete </button>
                                                          </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
            </div>
        )
    }
}

export default ListPaymentComponent