import React, { Component } from 'react'
import OrderService from '../services/OrderService';


class CreateOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
            orderId: this.props.match.params.orderId,    
       //     interviewId: '',
            userName: '',
            orderDate: '',
            orderStatus: ''
                    
        }
      
      //  this.changeInterviewIdHandler = this.changeInterviewIdHandler.bind(this);
       
        this.changeOrderStatusHandler = this.changeOrderStatusHandler.bind(this);
        this.saveOrUpdateOrder = this.saveOrUpdateOrder.bind(this);
    }

   
    componentDidMount(){

        if(this.state.orderId === '_add'){
            return
        }else{
            OrderService.getOrderById(this.state.orderId).then( (res) =>{
                let order = res.data;
                this.setState(
                    {
                //   interviewId: interview.interviewId,   
                    userName: order.userName
    ,
                    orderDate: order.orderDate,
                   
                    orderStatus: order.orderStatus,
                    
                });
            });
        }        
    }
    saveOrUpdateOrder = (i) => {
        i.preventDefault();
        let order = { /*interviewId: this.state.interviewId, */ userName: this.state.userName,orderDate: this.state.orderDate, orderStatus: this.state.orderStatus};
        console.log('order => ' + JSON.stringify(order));

        if(this.state.orderId === '_add'){
            OrderService.createOrder(order).then(res =>{
                console.log("Creating order");
                this.props.history.push('/http://localhost:8080/orderHistory/all');
            });
        }else{
            OrderService.updateOrder(order, this.state.orderId).then( res => {
                this.props.history.push('/http://localhost:8080/orderHistory/all');
            });
        }
    }
    

   
    changeOrderStatusHandler= (event) => {
        this.setState({orderStatus: event.target.value});
    }

    cancel(){
        this.props.history.push('/http://localhost:8080/orderHistory/all');
    }

    getTitle(){
        if(this.state.orderId === '_add'){
            return <h3 className="text-center">Add Order</h3>
       }else{
           return <h3 className="text-center">Update Order</h3>
        }   
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                   
                                   
                                        <div className = "form-group">
                                            <label> User Name: </label>
                                            <input placeholder="User Name" name="userName
                            " className="form-control" />
                                        </div>
                                       
                                        <div className = "form-group">
                                            <label>Order Date: </label>
                                            <input placeholder="Order Date" name="orderDate" className="form-control" 
                                                value={this.state.orderDate}/>
                                        </div>
                                       
                                    
                                        <div className = "form-group">
                                            <label> orderStatus: </label>
                                            <input placeholder="orderStatus" name=" orderStatus" className="form-control" 
                                                value={this.state.orderStatus} onChange={this.changeOrderStatusHandler}/>
                                        </div>
                                       
                                       

                                        <button block={true} className="btn btn-success" onClick={this.saveOrUpdateInterview}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}




export default CreateOrderComponent 
