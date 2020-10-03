import React from 'react';

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'Australia',
      zip: 0,
    }

  }

  render() {
    return (<div>
      <div className="Ready-In-Container">
        <div className="Shipping-Text"> Ready to ship in </div>
        <div className="Shipping-Text-2">{this.props.shippingInfo.ready}</div>
      </div>

      <div className="From-Container">
        <div className="Shipping-Text"> From </div>
        <div className="Shipping-Text-2">{this.props.shippingInfo.from}</div>
      </div>

      <div className="Cost-To-Ship-Container">
        <div className="Shipping-Text"> Cost to ship </div>
        <div className="Shipping-Text-2">{'$' + Number(this.props.shippingInfo.cost).toFixed(2)}</div>
      </div>

      <div className="Country-Bar-Container">
        <div className="Country-Text">Country</div>
        <form>
          <select className="Country-Dropdown-Bar" value={this.state.value} onChange={this.props.handleCheckoutCountry}>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Greece">Greece</option>
          </select>
        </form>
       </div>

      <div className="Zip-Bar-Container">
        <div className="Country-Text">Zip or postal code</div>
        <form>
        <input className="zipCode" type="text" onChange={this.props.handleCheckoutZip}></input>
        </form>
      </div>

      <div className="Return-Text-Bottom">
        <div>Returns accepted</div>
        <div>Exceptions may apply.</div>
      </div>

      <button className="shop-policy-button" onClick={() => {
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
      }
      }>View Shop policies</button>

      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={()=>{
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
          }}>&times;</span>
          <p>Shop policies for MincingMockingbird</p>
          <p>Thou shall not steal.</p>
        </div>
      </div>

    </div>);
  };
};

export default Shipping;