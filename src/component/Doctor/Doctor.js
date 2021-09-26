import React from 'react';
import './Doctor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Doctor = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
  
    const {name,type,age,country,salary,img}=props.doctor;
    return (
        <div>
            <div className="col">
                    <div className="card card-style" >
                        <img src={img} className="card-img-top mt-2 w-75 mx-auto rounded-circle" alt="..."/>
                        
                           
                            <div className="card-body">
                             <p className="fs-5 fw-bold">Name:{name}</p>
                        
                             <p className="card-text fs-5 fw-normal">
                                    <span className="fw-bold"> Type:</span> {type} <br />
                                    <span className="fw-bold"> Country:</span>{country} <br />
                                    <span className="fw-bold"> Age:</span> {age} <br />
                            </p>
                            <p className="fw-bold">Salary: {salary}$</p>

                        </div>
                        <div className="card-footer ">
                            <button 
                            
                            onClick={()=>props.handleAddToCart(props.doctor)}
                            className="bg-warning btn-style">{cartIcon}Add To Cart</button>
                        </div>
                
                    </div>
            </div>

            
        </div>
    );
};

export default Doctor;