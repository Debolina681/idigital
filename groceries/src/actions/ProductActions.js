import axios from 'axios';

import { GET_ERRORS,GET_PRODUCTS,GET_PRODUCT,DELETE_PRODUCT} from './type';
export const createProduct=(product,history)=>async dispatch=> {
    try {
        await axios.post ("http://localhost:8080/api/v2/Products",product)
            history.push("/dashboard");
    } catch (error) {  
             dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}
export const getProducts=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8080/api/v2/all");
      dispatch({
        type:GET_PRODUCTS,
        payload:res.data
    })
}
export const getProductsByCategory=(categoryName,history)=>async dispatch=>{
    const res=await axios.get(`http://localhost:8080/api/v2/category${categoryName}`);
      dispatch({
        type:GET_PRODUCTS,
        payload:res.data
    })
}
export const getProduct=(productId,history)=>async dispatch=>{
    const res=await axios.get(`http://localhost:8080/api/v2/${productId}`);
      dispatch({
        type:GET_PRODUCT,
        payload:res.data
    })
}
export const deleteProduct=(productId)=>async dispatch=>{
    if(window.confirm("Are you sure ? This will delete the product and the data related to it")) {
        await axios.delete(`http://localhost:8080/api/v2/${productId}`);
        dispatch({
            type:DELETE_PRODUCT,
            payload:productId
        })
    }
}