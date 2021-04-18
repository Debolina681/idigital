import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from 'axios';
import "../../App.css";
import { createProduct } from '../../actions/ProductActions';
import './AddProduct.css';
class AddProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            productName:"",
            price:"",
            quantity:"",
            categoryName:"",
            description:"",
            image:""
            
            
        }
       
        this.onChange=this.onChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        console.log("--------componentWillReceiveProps : Called----------");
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
        onChange(event){   
            console.log('---onchange---')         
           this.setState(
               {[event.target.name]:event.target.value}
           );
        }
        onSubmit=(event)=>{
            event.preventDefault();
            const newProduct = {
                productName:this.state.productName,
                price:this.state.price,
                image:this.state.image,
                quantity:this.state.quantity,
                categoryName:this.state.categoryName,
                description:this.state.description
            }
            console.log(newProduct);
            //  this.props.createProduct(newProduct,this.props.history);
    axios.post("http://localhost:8080/api/v2/Products",newProduct).then(c=>this.setState({prod:c.data}));
    alert("Product added succcesfully");
    this.props.history.push(`/dashboard`);
        }
        cancel(){
            this.props.history.push(`/dashboard`);
        }
    render(){
        return(
            <div className = "addproduct">
            <div>

                 <br></br>
                   <div className = "container">
                        <div className = "row">
                        <center style={{margin:"auto"}}>
                            <div className = "form" text align="center">                                
                                <div className = "card-body" style={{backgroundColor: "white"}}>
                               
                                    <form onSubmit={this.onSubmit}>                                       
                                        <h3 className="text-center">Add Product</h3>
                                         <div className = "form-group">
                                            <label>Product Name </label>
                                            <input placeholder="Product name"
                                            id="productName"
                                            name="productName"                                            
                                             className="form-control"
                                            
                                             value={this.state.productName}
                                             onChange={this.onChange}
                                             required />
                                        </div>
                                        <div class="form-group">
                                        <label >Choose an Image</label>
                                        <input placeholder="image"
                                         class="form-control"
                                         name="image"                                         
                                         value={this.state.image}
                                         onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price</label>
                                            <input  placeholder="Price"
                                            name="price"                                            
                                             pattern="[0-9]+" 
                                             className="form-control"
                                             value={this.state.price} 
                                             onChange={this.onChange}                                                                             
                                             required/>                                              
                                        </div>
                                        <div className = "form-group">
                                            <label>Quantity </label>
                                            <input 
                                            name="quantity"
                                             placeholder="Quantity"                                             
                                              className="form-control"
                                              value={this.state.quantity}
                                              onChange={this.onChange}                                             
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label>Product Category </label>
                                            <input  placeholder="Category"  
                                            name="categoryName"                                          
                                             className="form-control"       
                                             value={this.state.categoryName}  
                                             onChange={this.onChange}                                                                             
                                             required/>  
                                            </div>
                                            <div className = "form-group">
                                            <label> Product description </label>
                                            <input 
                                            name="description"
                                             placeholder="Description"                                             
                                              className="form-control"
                                              value={this.state.description}
                                              onChange={this.onChange}                                             
                                                />
                                        </div>
                                        
                                        <button className="btn btn-success" >Add</button>                                                                         
                                        <button className="btn btn-danger"onClick={this.cancel.bind(this)}>Cancel</button>
                                      
                                    </form>
                                  
                                    </div>
                                     </div>
                                     </center>
                                     </div>
                                    
                                     </div>
                                     </div>
                                     </div>
        );
    }
}
AddProduct.propTypes = {
    createProduct:PropTypes.func.isRequired,
     errors:PropTypes.object.isRequired,
    

}
const mapStateToProps = state => ({
    errors: state.errors,
    // categories:state.categories
  });
export default connect(mapStateToProps,{createProduct})(AddProduct);