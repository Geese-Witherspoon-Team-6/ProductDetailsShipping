import React from 'react';

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
        <div className="Quantity-Dropdown-Label">
          Quantity </div>
          <select className="Quantity-Dropdown-Bar" value={this.state.value} onChange={this.changeQuantity}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
       </form>

       <button className="Add-To-Cart-Button" onClick={this.sendQuantity}> Add to cart </button>
    </div>);
  };
};

export default QuantityDropDown;