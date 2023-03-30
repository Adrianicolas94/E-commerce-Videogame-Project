import React from 'react'
import {useContext} from 'react'
import {ShopContext} from '../../context/shop-context';
import './cart.css'

export const CartItem = (props) => {


    const{id, productName, price, productImage} = props.data;

    const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

  return (
    <div className='cartItem'>
        <div className="containerCartProduct">
            <img className='imageCart' src={productImage} alt={productName}/>
            <div className='cartDescription'>
                <p>{productName}</p>
                <p>£{price}</p>
                <div className="countHandler">
{/* 2. on click event in which i call the remove and add cart function with the useContext */}
                  <button className='button' onClick={() => removeFromCart(id)}>-</button>
{/* 1. after ui i did this input in which i put my value  */}
{/* 3. i create an updateCartItemCount in my ShopContext and then i invoke here. I pass the amount */}
                  <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), 
                  id)} />

                  <button className='button' onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
        
    </div>
  );
}
