import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor';
import './Main.css'

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

//    event handler function 
const handleAddToCart=doctor=>{
    const newCart=[...cart,doctor];
    setCart(newCart);
}

    return (
        // main body divided with two div
        <div className="row contain">
            {/* main body left side--doctors card  */}
            <div className=" col col-6 col-md-9">
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                     {
                    doctors.map(doctor=><Doctor
                    doctor={doctor} //pass each object
                    key={doctor.id} //pass key
                    handleAddToCart={handleAddToCart} //pass event handler 
                    ></Doctor>)
                   }  
                </div>
                            

            </div>

            {/* main body right side--cart  */}
            <div className="col col-6 col-md-3">
                <Cart  cart={cart}></Cart>
            </div>       
            
        
        </div>
    );
};

export default Main;