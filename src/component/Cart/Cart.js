import React from 'react';

const Cart = (props) => {

    const {cart}=props;
    let names=[];
    for(const name of cart){
    
        names.push(name.name);
        
    }
    return (
        <div>
            <p> Total Doctor Added:{props.cart.length}</p>
          
    
            
        </div>
    );
};

export default Cart;