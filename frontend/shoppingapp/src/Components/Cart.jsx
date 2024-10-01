import React, { useContext} from 'react';
// import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
// import { TiDeleteOutline } from 'react-icons/ti';
// import toast from 'react-hot-toast';
import { ProductContext } from '../context/Context';
const Cart = () => {
  // console.log("Cart.jsx is rendering now a time");

     const {cartItems}=useContext(ProductContext);
     console.log("cartitems",cartItems);
     
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <h1>Hello cart</h1>
        <div className="product-container">
          {cartItems.map((item) => (
            <div className="product" key={item.id}>
              <img src={item.image} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>{item.new_price}/-</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  )
}

export default Cart
