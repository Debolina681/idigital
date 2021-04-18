import axios from 'axios';
import { GET_ERROR, GET_CATEGORIES, GET_CATEGORY,DELETE_CATEGORY} from './type';

export const createCategory=(category,history)=>async dispatch=> {
    console.log("inside createCategory1");
    try {
       const payload = {...category};
        console.log("inside createCategory");
        await axios.post ("http://localhost:8080/category/add",payload);
        history.push("/categoryDashboard");
    } catch (error) {
        dispatch({
            type:GET_ERROR,
            payload:error
        })
    }
}

export const updateCategory=(category,history)=>async dispatch=> {
    try {
      const payload = {...category};
      const categoryId = payload.categoryId;
        await axios.put(`http://localhost:8080/category/update/${categoryId}`,payload);
        history.push("/categoryDashboard");
    } catch (error) {
        dispatch({
            type:GET_ERROR,
            payload:error.response.data
        })
    }
}
export const getAllCategory=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8080/category/all");
    dispatch({
        type:GET_CATEGORIES,
        payload:res.data
    })
}
export const getCategoryById=(categoryId,history)=>async dispatch=>{
    const res=await axios.get(`http://localhost:8080/category/show/${categoryId}`);
    dispatch({
        type:GET_CATEGORY,
        payload:res.data
    })
}
export const deleteCategoryById=(categoryId)=>async dispatch=>{
    if(window.confirm("Are you sure ? This will delete all the data related to this Category.")) {
        await axios.delete(`http://localhost:8080/category/delete/${categoryId}`);
        dispatch({
           type:DELETE_CATEGORY,
            payload:categoryId
        })

    }
}