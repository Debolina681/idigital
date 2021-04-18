import React from 'react';
import {getCategoryById,updateCategory} from '../../actions/CategoryAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
class UpdateCategory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categoryId:'',
            categoryName:'',
            categoryDescription:''
        }
    }
    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        const updatedCategory = {
            categoryId:this.state.categoryId,
            categoryName:this.state.categoryName,
            categoryDescription:this.state.categoryDescription,     
        }

      this.props.updateCategory(updatedCategory,this.props.history);

    }
    componentDidMount(){
        const {categoryId} = this.props.match.params;
        this.props.getCategoryById(categoryId,this.props.history);
 
     }
 
     componentWillReceiveProps(nextProps){
         const {
            categoryId,
            categoryName,
            categoryDescription
                      
         }=nextProps.category;
 
         this.setState({
            
            categoryId,
            categoryName,
            categoryDescription
         });
     }
    render(){
        return(
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Update Category</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Category Name" 
                                    title="name should be given as @example: Vegetables"
                                    name="categoryName" 
                                    onChange={this.onChange}
                                    value={this.state.categoryName}/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Enter the Description" 
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
        );
    }
}
UpdateCategory.propTypes = {
    getCategoryById:PropTypes.func.isRequired,
    updateCategory:PropTypes.func.isRequired,
    category:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    category: state.categories.category
  });

export default connect(mapStateToProps,{getCategoryById,updateCategory})(UpdateCategory);