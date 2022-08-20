import React from 'react';
import con from '../Media/construct.gif';
import { NavLink } from "react-router-dom";
import Common from './Common';

const About=()=>
{
    return (
        <div className='container text-center mt-3 mb-5'>
            <div >
                <h1>Software Engineering Project</h1>
                <h3>Project Members</h3>
            </div>
            <div className='mt-3'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Roll Number</th>
                            <th scope="col">Branch</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Abhinav Awasthi</td>
                            <td>200108076</td>
                            <td>Information Technology</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Abhinav Goyal</td>
                            <td>200108009</td>
                            <td>Information Technology</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td >Aditya Pandey</td>
                            <td>200108012</td>
                            <td>Information Technology</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default About;