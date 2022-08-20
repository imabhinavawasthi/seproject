import React from 'react';
import { NavLink } from "react-router-dom";
import con from '../Media/construct.gif';

const Card = (props) => {
    return (
        <>
            <div class="row mt-3 mb-3">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{props.name1}</h5>
                            <p class="card-text">{props.d1}</p>
                            <a href="#" class="btn btn-primary">Connect Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{props.name2}</h5>
                            <p class="card-text">{props.d2}</p>
                            <a href="#" class="btn btn-primary">Connect Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;