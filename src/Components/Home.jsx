import React,{ useState, useEffect } from 'react';
import anilogo from '../Media/logog.gif';
import {NavLink} from "react-router-dom";
import { auth, db } from '../Firebasecong/Firebasecong'
import { doc, collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router';

const Home = (props) => {
    const curruser=props.userdata;
    return (
        <div>
            {curruser!=undefined?<div>
                <section id="header" className="d-flex align-items-center" >
                <div className="container-fluid nav_bg">
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                        <div class="alert alert-primary" role="alert">
                                Hello <strong>{curruser.name}</strong>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 pt-0 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column animated'>
                                    <h1>Welcome to <strong className='brand-name'>Doctor+. </strong></h1>
                                    <h2 className='my-3'>
                                    <strong className='brand-name'>Consultant </strong>Online
                                    </h2>
                                    <div className='mt-3'>
                                        <NavLink className='btn btn-outline-primary' to="../doctors">Connect With Doctor</NavLink>
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
            </div>:
            <div>
            <section id="header" className="d-flex align-items-center" >
                <div className="container-fluid nav_bg">
                
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                        <div className='row'>
                                <div className='col-md-6 pt-0 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column animated'>
                                    <h1>Welcome to <strong className='brand-name'>Doctor+. </strong></h1>
                                    <h2 className='my-3'>
                                    <strong className='brand-name'>Consultant </strong>Online
                                    </h2>
                                    <div className='mt-3'>
                                        <NavLink className='btn btn-outline-primary' to="../login">Login</NavLink>
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
            </div>}
        </div>
    );
}

export default Home;