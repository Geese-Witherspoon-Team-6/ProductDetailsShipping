import React from 'react';
import $ from 'jquery';
import QuantityDropDown from './QuantityDropDown.jsx';
import ShowLessMore from './ShowLessMore.jsx';
import Shipping from './Shipping.jsx';
import MeetSellers from './MeetSellers.jsx';
import {CreatorNameTop, CreatorNameBoxTop, CreatorSalesBoxTop, CreatorSalesTop, Star, ProductTitleBoxTop, Filled, ProductPrice, GSTIncluded} from "./Styled/Main.js";

class ProductDetails extends React.Component {
  constructor (props) {
    super(props);

    let itemId = Number(location.pathname.split('/')[2]);

    this.state = {
      id: itemId,
      product: {},
      checkout_quantity: 0,
      to: 'Australia',
      zipCode: 123456,
      shippingInfo: {},
    };

    this.renderAll = this.renderAll.bind(this);
    this.handleCheckoutQuantity = this.handleCheckoutQuantity.bind(this);
    this.handleCheckoutCountry = this.handleCheckoutCountry.bind(this);
    this.handleCheckoutZip = this.handleCheckoutZip.bind(this);
    this.renderStars = this.renderStars.bind(this);
    this.renderShipping = this.renderShipping.bind(this);
  }

  componentDidMount() {
    this.renderAll();
    this.renderShipping();
  }

  renderAll() {
    fetch(`http://127.0.0.1:3002/api/product/${this.state.id}`)
      .then(res => res.json())
      .then(data => this.setState({product: data[0]}));
  }

  handleCheckoutQuantity(quantity) {
    this.setState({
      checkout_quantity: quantity
    });
  }

  handleCheckoutCountry(event) {
    this.setState({
      to: event.target.value
    }, () => {
      if (this.state.zipCode.length !== 6) {
        alert('Please input a valid Zip Code');
      } else {
        this.renderShipping();
      }
    });
  }

  handleCheckoutZip(event) {
    this.setState({
      zipCode: event.target.value
    });
  }

  renderStars(review) {
    var starString = '';
    for (var i = 0; i < review; i++) {
      starString = starString + '&#9733;';
    }
    return {__html: starString};
  }

  renderShipping() {
    fetch(`http://127.0.0.1:3002/api/shipping/${this.state.to}/${this.state.zipCode}`)
    .then(res => res.json())
    .then(data => this.setState({shippingInfo: data[0]}));
  }

  render() {
    return (
      <div>
        <CreatorNameBoxTop> <CreatorNameTop>{this.state.product.creator}</CreatorNameTop> </CreatorNameBoxTop>
        <CreatorSalesBoxTop> <CreatorSalesTop>{this.state.product.totalSales + ' sales'}</CreatorSalesTop>
          <Star>
            <Filled dangerouslySetInnerHTML={this.renderStars(this.state.product.reviews)}></Filled>
          </Star>
        </CreatorSalesBoxTop>

        <ProductTitleBoxTop>{this.state.product.productName}</ProductTitleBoxTop>

        <ProductPrice>{'$' + Number(this.state.product.price).toFixed(2)}</ProductPrice>

        <GSTIncluded>GST included (where applicable)</GSTIncluded>

        <QuantityDropDown handleCheckoutQuantity={this.handleCheckoutQuantity}/>
        <ShowLessMore product={this.state.product}/>
        <Shipping shippingInfo={this.state.shippingInfo} handleCheckoutCountry={this.handleCheckoutCountry} handleCheckoutZip={this.handleCheckoutZip}/>
        <MeetSellers creator={this.state.product.creator} creatorImgUrl={this.state.product.creatorImgUrl}/>
      </div>
    );
  }
};

export default ProductDetails;