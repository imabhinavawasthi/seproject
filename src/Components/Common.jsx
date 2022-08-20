import React from 'react';
import con from '../Media/construct.gif';
import { NavLink } from "react-router-dom";

const Common=(props)=>
{
    return (
        <>
        <br />
        <div className='row'>
            <div className='col-10 mx-auto'>
            <h5>We are building {props.name} page {props.nn}. <NavLink className='btn btn-primary' to="/">Go To Home</NavLink></h5>
            <br />
            <img src={con} alt='constructing' />
            </div>
        </div>
            
        </> 
    );
}

export default Common;