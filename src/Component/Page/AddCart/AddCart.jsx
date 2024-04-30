import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AddCart.css'

const AddCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Get cart items from local storage
    const cartItemsFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cartItemsFromStorage);
    
  }, []);

  const updateCart = (productId, newQuantity) => {
    // Update quantity of a product in the cart
    const updatedCartItems = cartItems.map(item => {
    
      if (item.id === productId) {
        return { ...item, quantity: Math.max(newQuantity, 0) };
      }
      return item;
    });

    // Update local storage and state
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems)); // Update key to 'cart'
  };

  const removeFromCart = (productId) => {
    // Remove product from the cart
    const updatedCartItems = cartItems.filter(item => item.id !== productId);

    // Update local storage and state
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems)); // Update key to 'cart'
  };

  const getTotalPrice = () => {
    // Calculate total price of all items in the cart
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  console.log(cartItems);

  return (
    <div className='p-4'>
      <h1>Shopping Cart</h1>

      <div className="shopping-cart ">
        <div>
          <br /><br /><br />
          <label className="product-details ">Product</label>
          <label className="product-price  m-0">Price</label>
          <label className="product-quantity ">Quantity</label>
          <label className="product-removal ">Remove</label>
          <label className="product-line-price my-3"></label>
        </div>

        {cartItems.map(item => (
          <div className="product " key={item.id}>
            <div className="border mt-3 p-3 overflow-hidden" >
              <div className="product-image">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className="product-details">
                <div className="product-title">{item.title}</div>
                <p className="product-description">{item.description}</p>
              </div>
              <div className="product-price m-0">{item.price}/-</div>
              <div className="product-quantity">
                <div className='d-none'>{item.quantity?item.quantity : item.quantity=1}</div>
                <input type="number" value={item.quantity} min="1" onChange={(e) => updateCart(item.id, parseInt(e.target.value))} />
              </div>
              <div className="product-removal">
                <button className="remove-product" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
              <div className="product-line-price"><b>Total  - </b> {item.price * item.quantity}</div>
            </div>
          </div>
        ))}

        <div className="totals">
          <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal">{getTotalPrice()}</div>
          </div>
          <div className="totals-item">
            <label>Tax (5%)</label>
            <div className="totals-value" id="cart-tax">{(getTotalPrice() * 0.05).toFixed(2)}</div>
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">15.00</div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value" id="cart-total">{(getTotalPrice() * 1.05 + 15).toFixed(2)}</div>
          </div>
        </div>
        <Link to={'/Checkout'}>
        <button className="checkout" >Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default AddCart;
