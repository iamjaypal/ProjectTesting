import axios from 'axios';
import React, { useEffect, useState, createContext} from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // console.log("Contex.jsx is rendering now a time");
  
  const [Products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);

  // Fetch products when the component is mounted
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    };
    fetchData();
  }, []);

  // Debugging - Log changes to cartItems
  useEffect(() => {
    console.log("Updated cartItems: ", cartItems);
  }, [cartItems]);

  // Function to add product to cart
  const onAdd = (product, quantity) => {
    console.log("onAdd called");

    const checkProductInCart = cartItems.find((item) => item.id === product.id);
    
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.new_price * quantity);
    setTotalQuantities((prevTotalQty) => prevTotalQty + quantity);

    if (checkProductInCart) {
      console.log("Product already in cart");

      // Update the quantity if the product already exists in the cart
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity
          };
        }
        return item;
      });

      setCartItems(updatedCart);
    } else {
      console.log("Product not in cart, adding new");

      // Add new product to cart with quantity
      const newProduct = { ...product, quantity };
      console.log("New product:", newProduct);

      setCartItems((prevCartItems) => [...prevCartItems, newProduct]);
    }
  };

  // Function to remove product from cart
  const onRemove = (product) => {
    const foundProduct = cartItems.find((item) => item.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  };

  // Function to increase quantity
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  // Function to decrease quantity
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <ProductContext.Provider
      value={{
        Products,
        qty,
        onAdd,
        cartItems,
        setCartItems,
        incQty,
        decQty,
        onRemove,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};