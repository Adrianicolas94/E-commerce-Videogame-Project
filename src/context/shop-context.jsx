import React from 'react';
//  1.context Api to pass data through out components tree, giving to the component the ability
//  1.to communicate and share data at different levels
import { createContext, useState } from 'react';
import { PRODUCTS } from '../product';

// 1.will keep track of states and functions that need to be accessed everywhere in our projects;
export const ShopContext = createContext(null);


//4. i create a function  that will get the array and create an empty object to rapresent our initial state of our cart items
// in this way i can add to my array new products and this function will handle the changes automatically
const getDefaultCart = () => {
    // i create a cart object and for each item  
    let cart = {}
    // and i loop through all of the items in the cart
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        // 'i' is my key
        cart[i] = 0
    }

    return cart;
};

export const ShopContextProvider = (props) => {
//  3. create a state 
    const [cartItems, setCartItems] = useState(getDefaultCart());


// 5. with the state i want be able to add an item to cart. 
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1 }))
    };
// 6. the same like before but this time i want to be able to remove 
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1 }))
    };

// 7. i want now to pass my add and remove component to the provider to access them outside this component with the contextValue
    

// 9. After CartItem component creation

// 9. i create the function updateCartItemCount that requires two things: (newAmmount (new ammount we want the input to have), itemId (to know which item we are changing)).
const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : newAmount}));
  };


// 10. it generates the total count amount 
const getTotalCartAmount = () => {

// 10. to do that i create a variable totalAmount and i set to 0 

        let totalAmount = 0
//  10. i loop through my object cart items  and i see if there a value > 0 (so if one of the items are in the cart). IF they are in the cart we grab that value (which is the amount of them in the cart) and multiply times the times of that specific product (id)  and add that to the total amount.
        for (const item in cartItems) {
            if (cartItems[item] > 0 )  {
                // find is a specific function in java script in where some part of it satisfy a condition 
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));

                totalAmount += cartItems[item] * itemInfo.price
            }
        }
//  10.  at the end of this loop i return the total amount
        return totalAmount;
    };


//  contextValue    is an object in which we pass in everything i want to access
 const contextValue = {
    cartItems,
    addToCart, 
    removeFromCart, 
    updateCartItemCount,
    getTotalCartAmount,

       };

// 2. to keep track of my data and organize my logic inside this component
// 8. i pass my contextValue directly to my provider
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
