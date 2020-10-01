import React from 'react';
import $ from 'jquery';
import QuantityDropDown from './QuantityDropDown.jsx';
import ShowLessMore from './ShowLessMore.jsx';
import Shipping from './Shipping.jsx';
import MeetSellers from './MeetSellers.jsx';
import exampleShippingData from './exampleShippingData.js';

class ProductDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      product: {},
      checkout_quantity: 0,
      checkout_country: '',
      checkout_zip: 0,
    };

    this.renderAll = this.renderAll.bind(this);
    this.handleCheckoutQuantity = this.handleCheckoutQuantity.bind(this);
    this.handleCheckoutCountry = this.handleCheckoutCountry.bind(this);
    this.handleCheckoutZip = this.handleCheckoutZip.bind(this);
  }

  componentDidMount() {
    this.renderAll();
  }

  renderAll() {
    fetch('/listing')
      .then(res => res.json())
      .then(data => this.setState({product: data[0]}));
  }

  handleCheckoutQuantity(quantity) {
    this.setState({
      checkout_quantity: quantity
    });
  }

  handleCheckoutCountry(country) {
    this.setState({
      checkout_country: country
    });
  }

  handleCheckoutZip(zip) {
    this.setState({
      checkout_zip: zip
    });
  }

  render() {
    console.log(this.state.product);
    return (
      <div>
        <div className="CreatorName-Box-Top"> <a href="#" className="CreatorName-Top">{this.state.product.creator}</a> </div>
        <div className="CreatorSales-Box-Top"> <a href="#" className="CreatorSales-Top">{this.state.product.totalSales + ' sales'}</a>
        <div className="star">
          <span className="filled">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </div>
        </div>

        <div className="ProductTitle-Box-Top">{this.state.product.productName}</div>

        <div className="Product-Price">{'$' + Number(this.state.product.price).toFixed(2)}</div>

        <div className="GST-Included">GST included (where applicable)</div>

        <QuantityDropDown handleCheckoutQuantity={this.handleCheckoutQuantity}/>
        <ShowLessMore product={this.state.product}/>
        <Shipping shipping={exampleShippingData} handleCheckoutCountry={this.handleCheckoutCountry} handleCheckoutZip={this.handleCheckoutZip}/>
        <MeetSellers creator={this.state.product.creator}/>
      </div>
    );
  }
};

export default ProductDetails;