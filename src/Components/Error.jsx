import React from 'react';
import { NavLink } from "react-router-dom";

const Error=()=>
{
    return (
        <>
        <br />
        <br />
        <div className='row'>
        <div className='col-10 mx-auto'>
            <h1>⚠ Page Not Found</h1>
            <p>Error 404</p>
            <br />
            <NavLink className='btn btn-primary' to="/">Go To Home</NavLink>
            </div></div>
        </> 
    );
}

export default Error;