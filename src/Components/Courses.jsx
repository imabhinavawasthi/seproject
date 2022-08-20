import React from 'react';
import con from '../Media/construct.gif';
import { NavLink } from "react-router-dom";
import Card from './Card';

const Courses = () => {
    return (
        <div className='container mt-3 text-center'>
        <h1 className='mb-3'>Search for Doctors</h1>
        <Card name1="Doctor1" name2="Doctor2" d1="Specialization of Doctor1" d2="Specialization of Doctor2"/>
        <Card name1="Doctor1" name2="Doctor2" d1="Specialization of Doctor1" d2="Specialization of Doctor2"/>
        <Card name1="Doctor1" name2="Doctor2" d1="Specialization of Doctor1" d2="Specialization of Doctor2"/>
        </div>
    );
}

export default Courses;