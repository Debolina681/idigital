import React, { Component } from 'react'
import OrderService from '../services/OrderService';

class UpdateOrderComponent extends Component {
    constructor(props) {
        super(props)

      
        this.state = {
            
            interviewId: this.props.match.params.orderId,
          
            userName: '',
            orderDate: '',
            orderStatus: ''
            
        }
        
       

        
         this.changeOrderStatusHandler = this.changeOrderStatusHandler.bind(this);
         
         this.updateOrder = this.updateOrder.bind(this);
     
    }

    componentDidMount()
    {
        OrderService.getOrderById(this.state.orderId).then( (res) =>{
            let order = res.data;
            this.setState(
                {
                     
                    userName: order.userName,
                    orderDate: order.orderDate,
                
                    orderStatus: order.orderStatus
                   
            });
        });
    }

    updateOrder = (i) => {
        i.preventDefault();

        let order = {userName: this.state.userName,orderDate: this.state.orderDate,orderStatus: this.state.orderStatus
        };
        console.log('order => ' + JSON.stringify(order));
        
        console.log('orderId => ' + JSON.stringify(this.state.orderId));
        OrderService.updateOrder(order, this.state.orderId).then( res => {
            this.props.history.push('/http://localhost:8080/orderHistory/all');
        });
    }

  
    changeOrderStatusHandler= (event) => {
        this.setState({orderStatus: event.target.value});
    }

    
    cancel()
    {
        this.props.history.push('http://localhost:8080/orderHistory/all');
    }

    render()
     {
        return (
            <div>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Order</h3>
                                <div className = "card-body">
                                    <form>
                                   
                                       
                                        <div className = "form-group">
                                            <label> Order Status: </label>
                                            <input placeholder="Order Status" name="orderStatus" className="form-control" 
                                                value={this.state.orderStatus} onChange={this.changeOrderStatusHandler}/>
                                        </div>
                                       

                                        <button className ="btn btn-success" onClick={this.updateOrder}>Save</button>
                                        <button className ="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
}
export default UpdateOrderComponent