import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor';

const Main = () => {
    const [doctors,setDoctor]=useState([]);

    // state for evenhandler
    const [cart,setCart]=useState([]);

    // effect for fetch data 
   useEffect(() => {
       fetch('./doctors.JSON')
           .then(res => res.json())
           .then(data => setDoctor(data));
   }, []);

   //effect for event handler


//    event handler function 
const handleAddToCart=doctor=>{
    const newCart=[...cart,doctor];
    setCart(newCart);
}

    return (
        <div className="container row ">
            {console.log(doctors)}
            <div className="col col-9">
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                     {
                    doctors.map(doctor=><Doctor
                    doctor={doctor}
                    key={doctor.id}
                    handleAddToCart={handleAddToCart}
                    ></Doctor>)
                   }  
                </div>
                            

            </div>

            <div className="col col-3">
                <Cart cart={cart}></Cart>
            </div>       
            
        </div>
    );
};

export default Main;