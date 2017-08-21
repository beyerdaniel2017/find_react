import React from 'react';

const Contacts = (props) => (
    <section id="contact" className="contacts">
    <div className="col-sm-8 col-md-9">
      <div className="map-holder">
        <iframe src={props.mapUrl}></iframe>
      </div>
    </div>
    <div className="col-sm-4 col-md-3 contact-details">
      <img className="full-image" src={props.imageUrl} alt="image description" />
      <h3>{props.companyName}</h3>
      <ul className="list-info list-unstyled">
        <li><i className="fa fa-map-marker"></i> {props.address}</li>
        <li><i className="fa fa-phone"></i> <a href="tel:{props.phone}">{props.phone}</a></li>
        <li><i className="fa fa-envelope"></i> <a href="mailto:{props.email}">{props.email}</a></li>
        <li><i className="fa fa-clock-o"></i>{props.timeOpen}</li>
        <li><i className="fa fa-home"></i> <a href="{props.siteUrl}">{props.siteUrl}</a> </li>
      </ul>
      <img className="outside-image" src={props.companyImgUrl} alt="image description" /> 
      </div>
  </section>
);

export {Contacts};