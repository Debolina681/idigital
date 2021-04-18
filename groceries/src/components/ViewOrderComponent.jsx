import React, { Component } from 'react'
import OrderService from '../services/OrderService'

class ViewOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orderId: this.props.match.params.orderId,
            order: { }
        }
    }

    componentDidMount(){ 
        OrderService.getOrderById(this.state.orderId).then( res => {
            this.setState({order:res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Order Details</h3>
                    <div className = "card-body">
                   
                        <div className = "row">
                            <label> User Name: </label>
                            <div> { this.state.order.userName }</div>
                        </div>
                        <div className = "row">
                        <label>Order Date: </label>
                            <div> { this.state.order.orderDate }</div>
                        </div>
                        <div className = "row">
                        <label> Order Status: </label>
                            <div> { this.state.order.orderStatus }</div>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
           
        )
    }
}

export default ViewOrderComponent

