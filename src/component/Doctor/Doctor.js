import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    // console.log(props);
    const {name,type,age,country,salary,img}=props.doctor;
    return (
        <div>
            <div className="col">
                    <div className="card card-style" >
                        <img src={img} className="card-img-top mt-5 w-75 mx-auto rounded-circle" alt="..."/>
                        
                           
                            <div className="card-body">
                             <p className="fs-5 fw-bold">Name:{name}</p>
                        
                             <p className="card-text  fw-normal">
                                   Type: {type} <br />
                                    Age: {age} <br />
                                    Country: {country} <br />
                            </p>
                            <p className="fw-bold">Salary: {salary}$</p>

                        </div>
                        <div className="card-footer ">
                            <button 
                            onClick={()=>props.handleAddToCart(props.doctor)}
                            className="bg-warning btn-style">Add To Cart</button>
                        </div>
                
                    </div>
            </div>

            
        </div>
    );
};

export default Doctor;