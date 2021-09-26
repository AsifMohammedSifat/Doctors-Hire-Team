import React from 'react';
import AddDoctor from '../AddDoctor/AddDoctor';
import './Cart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faDollarSign } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
        const userIcon = <FontAwesomeIcon icon={faUser} />
        const dollarIcon = <FontAwesomeIcon icon={faDollarSign} />


    const {cart}=props;
    let totalDoctors=[];
    let totalSalary=0;

    for(const doctor of cart){
        totalDoctors=[...totalDoctors,doctor];//set total selected doctors
        totalSalary=totalSalary+doctor.salary;//set total salary
    }


    return (
        <div>
            <div className="cart-upper mb-5">
                <p>
                     {userIcon}  Total Doctor Added:  <span style={{color:'blue',fontWeight:'bold'}}>  
                         {props.cart.length}
                    </span>
                </p>
            <p>{dollarIcon} Total Salary: <span style={{color:'blue',fontWeight:'bold'}}>${totalSalary}</span></p>
            <button className="btn btn-warning rounded-3 border-0 ">Buy Now</button>
            </div>
            {
                totalDoctors.map(doctor=><AddDoctor
                key={doctor.id}
                doctor={doctor}
                >

                </AddDoctor>)
            }
            
        </div>
    );
};

export default Cart;