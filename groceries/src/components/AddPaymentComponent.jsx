import React, { Component } from 'react'
import PaymentService from '../services/PaymentService';
//import PaymentService from './PaymentService';
import './AddPayment.css';
class AddPaymentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
             paymentMode: "",
            cardNumber: "",
            cardHolderName: "",
            expiryDate: "",
            cvv: "",
            otp: "",
            amount: ""
        }
        
         this.changePaymentModeHandler = this.changePaymentModeHandler.bind(this);
         this.changeCardNumberHandler = this.changeCardNumberHandler.bind(this);
         this.changeCardHolderNameHandler = this.changeCardHolderNameHandler.bind(this);
        this.changeExpiryDateHandler = this.changeExpiryDateHandler.bind(this);
        this.changeCvvHandler = this.changeCvvHandler.bind(this);
         this.changeOtpHandler = this.changeOtpHandler.bind(this);
        this.changeAmountHandler = this.changeAmountHandler.bind(this);
        this.savePayment = this.savePayment.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    // step 3
   // componentDidMount(){
       savePayment = (e) => {
           e.preventDefault();
           let payment = { paymentMode: this.state.paymentMode,
            cardNumber: this.state.cardNumber,
            cardHolderName: this.state.cardHolderName,
            expiryDate: this.state.expiryDate,
            cvv: this.state.cvv,
            otp: this.state.otp,
            amount:this.state.amount};
            console.log('payment =>' +JSON.stringify(payment));
            PaymentService.addPayment(payment).then(res => {
                this.props.history.push('/ListPaymentComponent');
            });
       }
cancel(){
    this.props.history.push('/ListPaymentComponent');
}

changePaymentModeHandler = (event) => {
    this.setState({paymentMode: event.target.value});
}
changeCardNumberHandler = (event) => {
    this.setState({cardNumber: event.target.value});
}
changeCardHolderNameHandler = (event) => {
    this.setState({cardHolderName: event.target.value});
}
changeExpiryDateHandler = (event) => {
    this.setState({expiryDate: event.target.value});
}
changeCvvHandler = (event) => {
    this.setState({cvv: event.target.value});
}
changeOtpHandler = (event) => {
    this.setState({otp: event.target.value});
}
changeAmountHandler = (event) => {
    this.setState({amount: event.target.value});
}
//        
    
    render() {
        return (
            <div className ="row-list">
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" style={{height: "80%", margin:"auto"}}>
                                
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Payment Mode: </label>
                                            <input placeholder="Enter Payment Mode" name="paymentMode" className="form-control" 
                                                value={this.state.paymentMode} onChange={this.changePaymentModeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Card Number: </label>
                                            <input placeholder="Enter your Card Number" name="cardNumber" className="form-control" 
                                                value={this.state.cardNumber} onChange={this.changeCardNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CardHolder Name </label>
                                            <input placeholder="Enter CardHolder Name" name="cardHolderName" className="form-control" 
                                                value={this.state.cardHolderName} onChange={this.changeCardHolderNameHandler}/>
                                        </div>
                                       <div className = "form-group">
                                            <label> Expiry Date </label>
                                            <input placeholder="Enter Expiry Date " name="expiryDate" className="form-control" 
                                                value={this.state.expiryDate} onChange={this.changeExpiryDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CVV </label>
                                            <input placeholder="Enter CVV" name="cvv" className="form-control" 
                                                value={this.state.cvv} onChange={this.changeCvvHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> OTP </label>
                                            <input placeholder="Enter OTP" name="otp" className="form-control" 
                                                value={this.state.otp} onChange={this.changeOtpHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Amount </label>
                                            <input placeholder="Enter Amount" name="amount" className="form-control" 
                                                value={this.state.amount} onChange={this.changeAmountHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.savePayment}>Pay</button>
                                         <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> 
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
            </div>
        )
    }
}

export default AddPaymentComponent