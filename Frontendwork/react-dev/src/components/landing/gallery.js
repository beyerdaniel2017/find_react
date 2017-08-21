import React from 'react';

const Gallery = (props) => (
    <section id="gallery" className="photos-section">
        <div className="two-images clearfix">
            <img src={props.image1} alt="{props.alt1}"  /> 
            <img src={props.image2} alt="{props.alt2}" /> 
        </div>
        <div className="full-image"> 
            <img src={props.image3} alt="{props.alt3}" /> 
        </div>
    </section>
);

export {Gallery};