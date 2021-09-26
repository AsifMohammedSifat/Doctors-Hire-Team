import React from 'react';
import AddDoctor from '../AddDoctor/AddDoctor';
import './Cart.css'

const Cart = (props) => {

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
                <p> Total Doctor Added:{props.cart.length}</p> 
            <h6>Total Salary: <span style={{fontWeight:'bold'}}>{totalSalary}$</span></h6>
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