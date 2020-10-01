import React from 'react';

const MeetSellers = (props) => (
  <div>
    <div className="Meet-Your-Sellers-Text">Meet your sellers</div>
    <div className="Meet-Your-Sellers-Middle-Section">
      <img src="https://i.etsystatic.com/iusa/929de3/22170658/iusa_75x75.22170658_8fxe.jpg?version=0" className="Seller-Image" alt="seller_image"></img>
      <div className="Seller-Username-Bottom">{props.creator}</div>
      <div className="Seller-Details">Owner of <a href="#" className="MeetSellers-Creator">{props.creator}</a></div>
    </div>
    <button className="message-creator-button" onClick={console.log("message creator")}>Message</button>
  </div>
);

export default MeetSellers;