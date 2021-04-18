import React from 'react';
import '../App.css';
 import './Home.css';
import Carousel from 'react-bootstrap/Carousel'

class Home extends React.Component{
    render(){
        return(
            
            <div>
               <h1 className="display-4 text-center">Welcome to Grocery Delivery </h1> 
               <br/>
               <Carousel>
                <Carousel.Item>
                <img  className ="image" />
                <Carousel.Caption>
                  {/* <h3 style={{color:'black'}}>Grocery Store</h3>
                  <p style={{color:'black'}}>welcome to our online grocery store</p> */}
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img   className = "image-list" />
                <Carousel.Caption>
                  {/* <h3 style={{color:'black'}}>Grocery Store</h3>
                  <p style={{color:'black'}}>This is online store for grocery shopping</p> */}
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img  className ="image-one" 
                />
                <Carousel.Caption>
                  {/* <h3 style={{color:'black'}}>Grocery Store</h3>
                  <p style={{color:'black'}}>Shop Online and get Fresh Items at your Place</p> */}
                </Carousel.Caption>
                </Carousel.Item>
               
               </Carousel>
               </div>
          
        );
    }
}
export default Home;