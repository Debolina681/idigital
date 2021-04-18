import React from 'react';
import {getProductsByCategory} from '../../actions/ProductActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import axios from 'axios';
class ViewProductByCategory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        const {categoryName} = this.props.match.params;
       // this.getProductsByCategory(categoryName,this.props.history);
      axios.get("http://localhost:8080/category/"+categoryName).then(c=>this.setState({products:c.data}));
    }
    render(){
        // const {products} =  this.props.products;         
        return(
            
            <div>  
                 <div id="product">
               {
                  this.state.products.map(product =>(
                       <div className="cardView" key={product.productId}>                           
                           <div className="content">                             
                               <span>${product.price}</span>
                               <br/>
                                <img src= {product.image}/>
                                <br/>
                               <span>{product.productName}</span>
                               <p className="para">{product.description}</p>
                               <p>{product.categoryName}</p>                            
                              
                               <Link to={`/customerView/${product.productId}`} className="btn btn-sm btn-info" >View </Link>
                               <br/>
                               <br/>   
                            <button className="btn btn-sm btn-info" > Add to Cart</button>

                           </div>
                       </div>
                   ))
               }
            </div>

            </div>
            
        );
    }
}
ViewProductByCategory.propTypes = {
    getProductsByCategory:PropTypes.func.isRequired,
    products:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    products: state.products
    
  });

export default connect(mapStateToProps,{getProductsByCategory})(ViewProductByCategory); 