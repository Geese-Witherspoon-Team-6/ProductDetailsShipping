import React from 'react';

const MeetSellers = (props) => (
  <div>
    <div className="Meet-Your-Sellers-Text">Meet your sellers</div>
    <div className="Meet-Your-Sellers-Middle-Section">
      <img src={props.creatorImgUrl} className="Seller-Image" alt="seller_image"></img>
      <div className="Seller-Username-Bottom">{props.creator}</div>
      <div className="Seller-Details">Owner of <a href="#" className="MeetSellers-Creator">{props.creator}</a></div>
    </div>
    <button className="message-creator-button" onClick={console.log("message creator")}>Message</button>
  </div>
);

export default MeetSellers;