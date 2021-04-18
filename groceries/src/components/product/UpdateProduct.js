import React from 'react';
import axios from 'axios';
import {getProduct,createProduct} from '../../actions/ProductActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
class UpdateProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
           prod:{}, 
            productName:'',
            price:'',
            quantity:'',
            categoryName:'',
            description:'',image:''
        }
    }
    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        const updatedProduct = {
            productId:this.props.match.params.productId,
            productName:this.state.productName,
            price:this.state.price,
            quantity:this.state.quantity,
            categoryName:this.state.categoryName,
            description:this.state.description,
            image:this.state.image
        }
console.log(updatedProduct.productId)
     //this.props.createProduct(updatedProduct,this.props.history);
     axios.post ("http://localhost:8080/api/v2/Products",updatedProduct).then(c=>this.setState({prod:c.data}));
    axios.put("http://localhost:8080/api/v2/"+updatedProduct.productId,updatedProduct).then(res=>
this.props.history.push("/dashboard"))
    }
    cancel(){
        this.props.history.push(`/dashboard`);
    }
    componentDidMount(){
        const {productId} = this.props.match.params;
        console.log(productId);
        console.log("-----")
       this.props.getProduct(productId,this.props.history);
    // axios.get("http://localhost:8080/api/v2/"+productId).then(c=>this.setState({prod:c.data}));
  
     }
 
     componentWillReceiveProps(nextProps){
         const {
            productId,
            productName,
            price,
            quantity,
            categoryName,
            description    ,
            image 
         }=nextProps.product;
 
         this.setState({
           productId,
            productName,
            price,
            quantity,
            categoryName,
            description ,
            image
                        
         });
     }
    render(){
        return(
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Update Product</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Product Name" 
                                    name="productName" 
                                    onChange={this.onChange}
                                    value={this.state.productName}
                                    disabled/>
                            </div>
                            <div className="form-group">
                                <label>Product Name</label>
                                <img src={this.state.image}/>
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Product Price" 
                                    name="price" 
                                    onChange={this.onChange}
                                    value={this.state.price}
                                    required/>
                            </div>
                            <div className="form-group">
                                <label>Quantity</label>
                                <input 
                                    type="number" 
                                    className="form-control form-control-lg" 
                                    placeholder="Quantity" 
                                     name="quantity" 
                                     min="1" max="10000"
                                    onChange={this.onChange}
                                    value={this.state.quantity}
                                    required/>
                            </div>
                            <div className = "form-group">
                                            <label>Product Category </label>
                                            <input placeholder="Category" 
                                            name="categoryName" 
                                            className="form-control" 
                                            onChange={this.onChange}
                                            value={this.state.categoryName}
                                               disabled/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Product description </label>
                                            <input placeholder="description" 
                                            name="description" 
                                            className="form-control" 
                                            onChange={this.onChange}
                                            value={this.state.description}
                                               disabled/>
                                        </div>
                                        
                                        <button className="btn btn-success" >Update</button>
                           
                                       
                                        <button className="btn btn-danger"onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
UpdateProduct.propTypes = {
    getProduct:PropTypes.func.isRequired,
    createProduct:PropTypes.func.isRequired,
    product:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    product: state.products.product
  });

export default connect(mapStateToProps,{getProduct,createProduct})(UpdateProduct); 