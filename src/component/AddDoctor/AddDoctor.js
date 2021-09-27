import React from 'react';
import './AddDoctor.css'

const AddDoctor=(props)=>{
    const {name,img}=props.doctor;//destructing selecting doctor data
    return(
        // cart lower --selecting doctor div
        <div className="containerCart my-2">
            <p className="fw-bold"><img className="cart-img  w-25 rounded-circle me-2" src={img} alt="" />
            {name}</p>
        </div>

    );
};
export default AddDoctor;