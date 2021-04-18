import React, { Component } from 'react'
import OrderService from '../services/OrderService'

class ListOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                orders: []
        }
        this.addOrder = this.addOrder.bind(this);
        this.editOrder = this.editOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    deleteOrder(orderId){
        OrderService.deleteOrder(orderId).then( res => {
            this.setState({orders: this.state.orders.filter(order => order.orderId !== orderId)});
        });
    }
    viewOrder(orderId){
        this.props.history.push(`/view-order/${orderId}`);
    }
    editOrder(orderId){
        this.props.history.push(`/add-order/${orderId}`);
    }

    componentDidMount(){
       // console.log("message")
        OrderService.getOrders().then((res) => {
            this.setState({orders: res.data});
           // console.log(res.data)   
        });
    }

    addOrder(){
        this.props.history.push('/add-order/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Order History</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addOrder}>Add Order</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered text-center">

                            <thead>
                                <tr>

                                  
                                    <th> User Name</th>
                                    <th> Order Date</th>
                                    <th> Order Status</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        order => 
                                        <tr key = {order.orderId}>
                                         
                                             <td> { order.userName} </td>  
                                             <td> { order.orderDate} </td>
                                             <td> { order.orderStatus} </td>
                
                                             <td>
                                                 
                                                 <button style={{marginLeft: "3%", fontFamily:'cursive',borderRadius: '30%'}} onClick={ () => {if (window.confirm('Are you sure you wish to delete this order?'))  this.deleteOrder(order.orderId)}} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "3%", backgroundColor: 'success',border: 'black', fontFamily:'cursive', borderRadius: '30%'}} onClick={ () =>  this.viewOrder(order.orderId)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListOrderComponent
