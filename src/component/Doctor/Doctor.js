import React from 'react';
import './Doctor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Doctor = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
  
    const {name,type,age,country,salary,img}=props.doctor;//destructing of object
    return (
        <div>
            <div className="col">
                    <div className="card card-style" >
                        {/* card img  */}
                        <img src={img} className="card-img-top mt-2 w-25 w-md-75 mx-auto rounded-circle" alt="..."/>
                        
                           {/* card body  */}
                            <div className="card-body">
                             <p className="fs-6 fs-md-5 fw-bold">Name:{name}</p>
                        
                             <p className="card-text fs-6 fs-md-5 fw-normal">
                                    <span className="fw-bold"> Type:</span> {type} <br />
                                    <span className="fw-bold"> Country:</span>{country} <br />
                                    <span className="fw-bold"> Age:</span> {age} <br />
                            </p>
                            <p className="fw-bold">Salary: {salary}$</p>

                        </div>

                        {/* card footer  */}
                        <div className="card-footer ">
                            {/* add to cart button  */}
                            <button 
                            
                            onClick={()=>props.handleAddToCart(props.doctor)}
                            className="bg-warning text-dark fw-bold btn-style">{cartIcon}Add To Team</button>
                        </div>
                
                    </div>
            </div>

            
        </div>
    );
};

export default Doctor;