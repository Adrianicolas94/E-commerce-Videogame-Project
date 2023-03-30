import React, { useContext } from 'react'
import './product.css'
import {ShopContext} from '../../context/shop-context'


export const Product = (props) => {

    const{id, productName, price, productImage, platform } = props.data;


    const {addToCart, cartItems} = useContext(ShopContext);

// 2. i create a variable cartItemAmount  that will be the cart Items and we grab the value of the id for this specific product
    const cartItemAmount = cartItems[id];
    


  return (

   
       
        <div className="product">
          
              <img className='imageProduct' src={productImage} alt='{productName}'/>
                    <div className='description'>
                        <div className="productName">
                          <h4>{productName}</h4>
                        </div>
          
                      <p>{platform}</p>
                      <div className="price">
                        <h4> £{price}</h4>
                      </div>
{/*   1. i call the function addToCart from ShopContext and i give the id, i have the id cause i map Through the PRODUCTS array */}

{/*  3 then i add some logic { cartItemAmount > 0 && <>({cartItemAmount})</>} */}
                    
            </div>
            <button className='glow-on-hover' onClick={() => addToCart(id)}>Add To Cart { cartItemAmount > 0 && <>({cartItemAmount})</>} </button>
        </div>
        
       
      

 

  )
}

