import React, { useContext, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import '../Styles/product.css'
import { ProductContext } from '../context/Context';
const Product = () => {
    const location=useLocation();
    const {product}=location.state;
    const {onAdd,qty,incQty,decQty}=useContext(ProductContext);
//   const [index, setIndex] = useState(0);

  const handleBuyNow = () => {
    onAdd(product, qty);
    // setShowCart(true);
  }

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={product.image} className="product-detail-image" />
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{product.name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>Best Product to buy now a time</p>
          <p className="price">{product.new_price}/-</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty} ><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={()=>onAdd(product,qty)} >Add to Cart</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
         
        </div>
      </div>

      {/* <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div> */}
    </div>
  )
}

export default Product;