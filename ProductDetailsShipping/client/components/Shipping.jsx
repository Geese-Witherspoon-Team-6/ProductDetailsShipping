import React from 'react';

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'Australia',
      zip: 0,
    }

    this.sendCountry = this.sendCountry.bind(this);
    this.changeCountry = this.changeCountry.bind(this);
    this.sendZip = this.sendZip.bind(this);
    this.changeZip = this.changeZip.bind(this);
  }

  sendCountry() {
    this.props.handleCheckoutCountry(this.state.country);
  }

  sendZip() {
    this.props.handleCheckoutZip(this.state.zip);
  }

  changeCountry(event) {
    this.setState({
      country: event.target.value
    });
  }

  onDropdownChangeFunction(event) {
    this.changeCountry(event);
    this.sendCountry();
  }

  changeZip(event) {
    this.setState({
      zip: event.target.value
    });
  }

  onZipChangeFunction(event) {
    this.changeZip(event);
    this.sendZip();
  }

  render() {
    return (<div>
      <div className="Ready-In-Container">
        <div className="Shipping-Text"> Ready to ship in </div>
        <div className="Shipping-Text-2">{this.props.shipping[0].ready}</div>
      </div>

      <div className="From-Container">
        <div className="Shipping-Text"> From </div>
        <div className="Shipping-Text-2">{this.props.shipping[0].from}</div>
      </div>

      <div className="Cost-To-Ship-Container">
        <div className="Shipping-Text"> Cost to ship </div>
        <div className="Shipping-Text-2">{this.props.shipping[0].cost}</div>
      </div>

      <div className="Country-Bar-Container">
        <div className="Country-Text">Country</div>
        <form>
          <select className="Country-Dropdown-Bar" value={this.state.value} onChange={this.onDropdownChangeFunction.bind(this)}>
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
        <input className="zipCode" type="text" onChange={this.onZipChangeFunction.bind(this)}></input>
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

      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={()=>{
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