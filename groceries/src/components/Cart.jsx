import React from "react";
import "./Cart.css";
function Cart(props) {
    // const {cartObjList}=props;
    const cartObjList = [
        {
            name: "Chilies",
            category:"Vegetables",
            qnty:"100g",
            price:"20"
        },
        {
            name: "Mangoes",
            category:"Fruits",
            qnty:"250g",
            price:"80"
        },
        {
            name: "Lady Finger",
            category:"Vegetables",
            qnty:"500g",
            price:"30"
        }
    ]
    let renderView = null;
    if(cartObjList && cartObjList.length) {
        renderView= cartObjList.map((item)=> {
            return <div className="cart-wrapper">
              <div className="">
            <div className="box-shadow">
              <div className="card-span">{item.name}</div>
              <div>{item.category}</div>
              
            </div>
            </div>
      
            <div className="box-shadow">
              <div className="card-span"><span>${item.price}</span></div>
              <div>{item.qnty}</div>
            </div>
          </div>
        })
    }
    else {
        renderView = <img src={null}/>
    }

  return renderView
}
export default Cart;
