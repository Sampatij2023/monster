/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img 
             alt='monster-image'
             src={'https://robohash.org/${props.monster.id}?set=set2&size=180x180'}
        />
        
        <h2> { props.monster.name } </h2>
        <p>{props.monster.email}</p>
    </div>
);