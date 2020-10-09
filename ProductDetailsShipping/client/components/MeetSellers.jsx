import React from 'react';
import {MeetYourSellersText, SellerUsernameBottom, SellerDetails, MeetSellersCreator, MessageCreatorButton} from './Styled/MeetSellers.js';

const MeetSellers = (props) => (
  <div>
    <MeetYourSellersText>Meet your sellers</MeetYourSellersText>
    <div className="Meet-Your-Sellers-Middle-Section">
      <img src={props.creatorImgUrl} className="Seller-Image" alt="seller_image"></img>
      <SellerUsernameBottom>{props.creator}</SellerUsernameBottom>
      <SellerDetails>Owner of <MeetSellersCreator>{props.creator}</MeetSellersCreator></SellerDetails>
    </div>
    <MessageCreatorButton>Message</MessageCreatorButton>
  </div>
);

export default MeetSellers;