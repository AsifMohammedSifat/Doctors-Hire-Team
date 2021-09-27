import React from 'react';
import AddDoctor from '../AddDoctor/AddDoctor';
import './Cart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faDollarSign } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
        const userIcon = <FontAwesomeIcon icon={faUser} />
        const dollarIcon = <FontAwesomeIcon icon={faDollarSign} />


    const {cart}=props; //destructing of add to cart-button click data
    let totalDoctors=[];
    let totalSalary=0;

    for(const doctor of cart){
        totalDoctors=[...totalDoctors,doctor];//set total selected doctors
        totalSalary=totalSalary+doctor.salary;//set total salary
    }


    return (
        <div>
            {/* div of carts selected doctor  */}
            <div className="cart-upper mb-5">
                <p className="cartText">
                    {/* cart upeer data--total doctor*/}
                     {userIcon}  Total Doctor Added:  <span style={{color:'blue',fontWeight:'bold'}}>  
                         {props.cart.length}
                    </span>
                </p>
            <p p className = "cartText" >
                {/* cart upper data-total salary  */}
                {dollarIcon} Total Salary: <span style={{color:'blue',fontWeight:'bold'}}>
                    ${totalSalary}</span>
            </p>
            <button className="btn btn-warning cartText fw-bold   rounded-3 border-0">Pay Now</button>

            </div>
            {
                totalDoctors.map(doctor=><AddDoctor
                key={doctor.id}//passing object id
                doctor={doctor}//passing add to cart data 
                >

                </AddDoctor>)
            }
            
        </div>
    );
};

export default Cart;