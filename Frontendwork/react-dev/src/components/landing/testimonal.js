import React from 'react';

const Testimonal = (props) => ( 
    <div className="slide">
       <h3>{props.quote}</h3>
       <p>{props.name}</p>
       <span>{props.info}</span>
    </div>
);

export {Testimonal};