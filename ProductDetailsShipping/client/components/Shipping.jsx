import React from 'react';
import {ReadyInContainer, ShippingText, ShippingText2, FromContainer, CostToShipContainer, CountryBarContainer, CountryText, CountryDropdownBar, ZipBarContainer, ZipCode, ReturnTextBottom, ShopPolicyButton} from './Styled/Shipping.js';

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
      <ReadyInContainer>
        <ShippingText> Ready to ship in </ShippingText>
        <ShippingText2>{this.props.shippingInfo.ready}</ShippingText2>
      </ReadyInContainer>

      <FromContainer>
        <ShippingText> From </ShippingText>
        <ShippingText2>{this.props.shippingInfo.from}</ShippingText2>
      </FromContainer>

      <CostToShipContainer>
        <ShippingText> Cost to ship </ShippingText>
        <ShippingText2>{'$' + Number(this.props.shippingInfo.cost).toFixed(2)}</ShippingText2>
      </CostToShipContainer>

      <CountryBarContainer>
        <CountryText>Country</CountryText>
        <form>
          <CountryDropdownBar value={this.state.value} onChange={this.props.handleCheckoutCountry}>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Greece">Greece</option>
          </CountryDropdownBar>
        </form>
       </CountryBarContainer>

      <ZipBarContainer>
        <CountryText>Zip or postal code</CountryText>
        <form>
        <ZipCode type="text" onChange={this.props.handleCheckoutZip}></ZipCode>
        </form>
      </ZipBarContainer>

      <ReturnTextBottom>
        <div>Returns accepted</div>
        <div>Exceptions may apply.</div>
      </ReturnTextBottom>

      <ShopPolicyButton onClick={() => {
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
      }
      }>View Shop policies</ShopPolicyButton>

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