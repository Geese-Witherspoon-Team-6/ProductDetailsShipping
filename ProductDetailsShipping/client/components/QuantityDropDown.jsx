import React from 'react';
import {QuantityDropdownLabel, QuantityDropdownBar, AddToCartButton} from './Styled/QuantityDropDown.js';

class QuantityDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    }

    this.sendQuantity = this.sendQuantity.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  sendQuantity() {
    this.props.handleCheckoutQuantity(this.state.quantity);
  }

  changeQuantity(event) {
    this.setState({
      quantity: parseInt(event.target.value, 10)
    });
  }

  render() {
    return (<div>
      <form>
        <QuantityDropdownLabel>
          Quantity </QuantityDropdownLabel>
          <QuantityDropdownBar value={this.state.value} onChange={this.changeQuantity}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </QuantityDropdownBar>
       </form>

       <AddToCartButton onClick={this.sendQuantity}> Add to cart </AddToCartButton>
    </div>);
  };
};

export default QuantityDropDown;