import React  from 'react';
import {Link} from 'react-router-dom';
const CreateCategoryButton = () =>{
    return(

        <React.Fragment>
            <Link to="/addCategory" className="btn btn-lg btn-info">
                Add New Category
            </Link>
        </React.Fragment>        
    );
}

export default CreateCategoryButton;