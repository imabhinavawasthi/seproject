import React from 'react';
import con from '../Media/construct.gif';
import { NavLink } from "react-router-dom";
import Common from './Common';
import anilogo from '../Media/logog.gif';

const Youtube = () => {
    return (
        <div>
            <section id="header" className="d-flex align-items-center" >
                <div className="container-fluid nav_bg">
                
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                        <div className='row'>
                                <div className='col-md-6 pt-0 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column animated'>
                                    <h1>Online  <strong className='brand-name'>Consultant </strong></h1>
                                    <h2 className='my-3'>
                                    <strong className='brand-name'>Connect With </strong>Doctors
                                    </h2>
                                    <div className='mt-3'>
                                        <NavLink className='btn btn-outline-primary' to="../doctors">Connect Now</NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-2 order-lg-1 header-img'>
                                    <img src={anilogo} className="img-fluid animated" alt="logo_animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Youtube;