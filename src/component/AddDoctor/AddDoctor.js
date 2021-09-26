import React from 'react';
import './AddDoctor.css'

const AddDoctor=(props)=>{
    const {name,img}=props.doctor;
    return(
        <div className="containerCart">
            <p className="fw-bold"><img className="cart-img  w-25 rounded-circle me-2" src={img} alt="" />
            {name}</p>
        </div>

    );
};
export default AddDoctor;