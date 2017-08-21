import React from 'react';

const ResultItem = (props) => (
    <div className="col-20 col-xs-6 col-sm-3">
            <div className="result-item">
              <div className="image-wrapper">
                <button className="action"><i className="fa fa-play-circle-o" aria-hidden="true"></i></button>
                <button className="share"><i className="fa fa-share-alt"></i> </button>
                <img src={props.imgLink} alt="description" /> </div>
              <h3>{props.businessName}</h3>
              <ul className="list-info list-unstyled">
                <li><a href="tel:{props.phone}">{props.phone}</a></li>
                <li>{props.address}</li>
                <li><a href="{props.url}">{props.url}</a></li>
                <li><a href="mailto:{props.email}">{props.email}</a></li>
              </ul>
            </div>
    </div>
);

export {ResultItem};