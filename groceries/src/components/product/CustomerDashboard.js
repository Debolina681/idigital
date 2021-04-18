import React from 'react';
import CustomerProductItem from './CustomerProductItem';
import './Dashboard.css';
class CustomerDashboard extends React.Component{
    render(){       
      return(    
          <div className="dashboard">      
          <div className="container">
              <div className="row">
                  <div className="col-md-12">                 
                      <h1 className="display-4 text-center">Products</h1>
                      <br />                
                      <CustomerProductItem/> 
                  </div>
              </div>
          </div>  
          </div>       
      );
  }
}
export default CustomerDashboard;