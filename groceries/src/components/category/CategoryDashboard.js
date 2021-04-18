import React from 'react';
import CreateCategoryButton from './CreateCategoryButton';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getAllCategory}from "../../actions/CategoryAction";
import {deleteCategoryById} from '../../actions/CategoryAction';
import {Link} from 'react-router-dom';
import './AddCategory.css';

class CategoryDashBoard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categories:[]
        }
    }
    onDeleteClick=(categoryId)=>{
        console.log('--------EmployeeComponent:onDeleteClick Called--------')
        this.props.deleteCategoryById(categoryId);
        //console.log(id);
    }
    componentDidMount(){
        this.props.getAllCategory();
    }

    render(){
        //console.log("this.props.emp :" + this.props.employees);
    const { categories } = this.props.categories || [];
        return(
            <div className ="category-dashboard">
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
               <h1 className="display-4 text-center">List of Categories</h1>
               <br/>
               <CreateCategoryButton/>
               <br/>
               <hr/>
               <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                console.log(categories),
                                    categories.map(
                                        (category) => 
                                        <tr key = {category.categoryId}>
                                             <td> {category.categoryName} </td>   
                                            <td> {category.categoryDescription}</td>
                                             <td>
                                                 <Link to={"/updateCategory/"+category.categoryId} className="btn btn-info"> Update </Link>
                                                 <button className="u-margin-left-20 btn btn-danger" onClick={this.onDeleteClick.bind(this,category.categoryId)}>Delete </button>
                                             </td>
                                             </tr>
                                      
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    </div></div></div>
            </div>
            </div>
        );
    }
}

CategoryDashBoard.propTypes={
    getAllCategory:PropTypes.func.isRequired,
    deleteCategoryById:PropTypes.func.isRequired,

}

const mapStateToProps=(state)=>({
    categories:state.categories
});
export default connect(mapStateToProps,{getAllCategory,deleteCategoryById})(CategoryDashBoard);