import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../utils/CartSlice';
import { increaseProductCount } from '../utils/ProductSlice';

function Cart() {
  const cartItems = useSelector((store) => store.cart.userCart)
  const dispatch = useDispatch();

  const deleteHandler = (item) => {
    dispatch(removeItem(item));
    dispatch(increaseProductCount(item));
  }

  return (
    <div className='cart-body'>
      <h1>Cart</h1>
      <div className='cart-data'>
        <div className="cart-items">
          <h2>Name</h2>
          <h2>Price</h2>
          <h2>Count</h2>
          <h2>Remove</h2>
        </div>
        {cartItems.map((item) => {
          return (
            <div className="cart-items">
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{item.count}</p>
              <button className='del' onClick={() => deleteHandler(item)}>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart;
