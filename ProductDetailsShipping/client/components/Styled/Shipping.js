import styled from "styled-components";
export const ReadyInContainer = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  flex-basis: 50%;
  max-width: 50%;
  margin-bottom: 18px !important;
  margin-top: 15px;
  padding-right: 12px !important;
  float: left;
`;

export const FromContainer = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  flex-basis: 50%;
  max-width: 50%;
  margin-bottom: 18px !important;
  margin-top: 15px;
  padding-right: 12px !important;
  float: left;
`;

export const CostToShipContainer = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  flex-basis: 50%;
  max-width: 50%;
`;

export const CountryDropdownBar = styled.select`
  transition: 0.5s;
  appearance: none;
  box-shadow: 0 1px 6px 0 rgba(34, 34, 34, 0.15);
  display: block;
  font-family: inherit;
  font-size: 16px;
  height: 48px;
  padding-left: 12px;
  padding-right: 36px;
  width: 100%;
  border-radius: 6px;
  background: #FFFFFF;
  border-color: rgba(34, 34, 34, 0.15);
  border-style: solid;
  border-width: 1px;
  color: #222222;
  text-indent: 0.01px;
  cursor: pointer;

  &:hover {
    transition: box-shadow 0.5s;
    box-shadow: 0 1px 12px 0 #888888;
  }
`;

export const ZipCode = styled.input`
  transition: 0.5s;
  appearance: none;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 rgba(34, 34, 34, 0.1) inset;
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  color: #222222;
  display: block;
  font-size: 16px;
  line-height: 28px;
  height: 48px;
  outline: none;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 12px;
  padding-right: 12px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;

  &:hover {
    transition: box-shadow 0.5s;
    box-shadow: 0 1px 8px 0 #888888;
  }

  &:focus {
    outline: black;
  }
`;

export const CountryText = styled.div`
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
`;

export const CountryBarContainer = styled.div`
  border: 0;
  padding: 0;
  margin-bottom: 12px !important;
  margin-top: 12px !important;
  box-sizing: border-box;
`;

export const ZipBarContainer = styled.div`
  border: 0;
  padding: 0;
  margin-bottom: 12px !important;
  margin-top: 12px !important;
  box-sizing: border-box;
`;

export const ReturnTextBottom = styled.div`
  line-height: 24px;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-weight: 300;
  font-size: 16px;
  box-sizing: border-box;
`;

export const ShopPolicyButton = styled.button`
  margin-left: -15px;
  color: #222222;
  font-size: 13px;
  line-height: 1.4;
  min-height: 36px;
  min-width: 36px;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 15px;
  padding-right: 15px;
  text-decoration: none;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 24px;
  display: inline-block;
  font-weight: bold;
  position: relative;
  text-align: center;
  vertical-align: middle;

  &:hover {
    transition: opacity 0.5s, background-color 0.5s;
    background-color: #E1E4E7;
    color: black;
    opacity: 0.6;
  }
`;

export const ShippingText = styled.div`
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  text-align: left;
  -webkit-font-smoothing: antialiased;
`;

export const ShippingText2 = styled.div`
  line-height: 24px;
  font-family: "Guardian-EgypTT",serif;
  font-weight: 300;
  letter-spacing: 0.35px;
  font-size: 20px;
  margin-top: 6px !important;
  text-align: left;
`;