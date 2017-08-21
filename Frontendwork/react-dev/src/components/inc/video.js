import React from 'react';

const Video = () => (
   <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsInline autoPlay muted loop>
      <source src="images/343647377.mp4" type="video/mp4" />
    </video>
);

export {Video};