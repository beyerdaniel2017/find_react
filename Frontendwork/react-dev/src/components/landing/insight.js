import React from 'react';

const Insight = (props) => (
    <div className="col-sm-4">
      <div className={props.order}> <span className="animation1 small-circle"></span> <span className="animation2 small-circle"></span> <span className="animation3 small-circle"></span>
        <div className="amount"><span className="amount-number">{props.amount}</span></div>
        <p>{props.title}</p>
      </div>
    </div>
);

export {Insight};