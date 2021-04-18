import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import "../../App.css"
import {deleteProduct, getProducts} from "../../actions/ProductActions";
class ProductItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    onDeleteClick=(productId)=>{
       
        console.log('--------ProductItemComponent:onDeleteClick Called--------')
        this.props.deleteProduct(productId);
        
        //console.log(id);
       }
    componentDidMount(){
       // axios.get("http://localhost:8080/api/v2/all").then(c=>this.setState({products:c.data}));
        this.props.getProducts();
    }


    render(){
        const {products} =  this.props.products;         
        return(
            
            <div>               
                 
                        
                 <div id="product">
               {
                   products.map(product =>(
                       <div className="card" key={product.productId}>                           
                           <div className="content">                             
                               <span>${product.price}</span>
                               <br/>
                               <img src= {product.image}className="image"/>
                               <span>{product.productName}</span>
                               <p className="para">{product.description}</p>
                               <p>{product.categoryName}</p>                              
                               <Link to={`/updateProduct/${product.productId}`} className="btn btn-sm btn-info">Update</Link>
                               <button className="btn btn-sm btn-danger"  onClick={this.onDeleteClick.bind(this,product.productId)}>Delete </button>
                               <Link to={`/viewProduct/${product.productId}`} className="btn btn-sm btn-info" >View </Link>
                          </div>
                       </div>
                   ))
               }
            </div>
            </div>            
        );
    }
}
ProductItem.propTypes={
    getProducts:PropTypes.func.isRequired,
     deleteProduct:PropTypes.func.isRequired

}
const mapStateToProps=(state)=>({
    products:state.products
});

export default connect(mapStateToProps,{getProducts,deleteProduct})(ProductItem);