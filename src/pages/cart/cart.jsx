import React, { useContext } from 'react'
import { PRODUCTS } from '../../product'
import {ShopContext} from '../../context/shop-context';
import { CartItem } from './cart-item';
import travolta from '../../assets/travolta.gif';
import {useNavigate} from 'react-router-dom';


export const Cart = () => {
//  4. grab getTotalCartAmount with useContext hook

  const { cartItems, getTotalCartAmount} = useContext(ShopContext);
  
// 4. and give to the variable totalAmount the getTotalCartFunction.

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate()
  return (
    <div className='cart'>
                    <div className='title'>
                        <h1>Your cart</h1>
                    </div>
                    <div className='cartItem'>
{/* 1 i display product in the array PRODUCTS mapping through each object but with a DIFFERENCE
 i dont want to display all producst but only the element in the PRODUCT array but also in the CART. 
 I want the product in the CART Object (in the shop-contest.jsx) that is > 0   */}
                      {PRODUCTS.map((product) => {
//  2 . if the cartItems object in which i have my product with the  id key  is not equal to zero so is in my cart 
                        if (cartItems[product.id] !== 0) {
                          return <CartItem data={product}/>
                        }
                      })}
                      </div>

                      {/* logic to render empty cart */}
{/*  3. i display the amount and the button section, i create getTotalCartAmount */}
                       {totalAmount > 0 ? 
                      <div className="checkout">
{/*  5. use totalAmount to render the totalPrice */}
                          <p>Subtotal: £{totalAmount.toFixed(2)}</p>
                          <div className="checkoutButtonsContainer">

 {/* 6. Navigate function to navigate to another path with this button  */}
                            <button className='checkoutBtn' onClick={() => navigate('/')}>Continue Shopping</button>
                            <button className='checkoutBtn'> CheckOut </button>
                          </div>
                        </div>
                        : 
                        
                        <div className="emptyCart">
                          <h1>it seems that your cart is empty....</h1>
                          <img src={travolta} width={'400px'} />
                        </div>
                         }
                    </div>
 );
}
