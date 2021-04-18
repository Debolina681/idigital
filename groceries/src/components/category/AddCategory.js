import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createCategory} from "../../actions/CategoryAction";
import './AddCategory.css';
class AddCategory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categoryName:'',
            categoryDescription:'',
            errors:{}
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log("--------componentWillReceiveProps : Called----------");
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }

    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        const newCategory = {
            categoryName:this.state.categoryName,
            categoryDescription:this.state.categoryDescription,
        }
        console.log(newCategory,"-->>".repeat(100));
        
        this.props.createCategory(newCategory,this.props.history);
    }
    render(){
        return(
            <div className="addCategory">
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Add Category</h5>
                       
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Please Enter Category Name" 
                                    name="categoryName" 
                                    onChange={this.onChange}
                                    value={this.state.categoryName} 
                                    pattern="[a-zA-Z][a-zA-Z ]{2,}"
                                    title="name should be given as @example: Vegetables"
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Enter the Description" 
                                    pattern="[a-zA-Z]{0-100}"
                                    title="Description must of maximum 100 characters"
                                    name="categoryDescription" 
                                    onChange={this.onChange}
                                    value={this.state.categoryDescription}
                                    required/>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    }
}
AddCategory.propTypes = {
    createCategory:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps,{createCategory})(AddCategory);