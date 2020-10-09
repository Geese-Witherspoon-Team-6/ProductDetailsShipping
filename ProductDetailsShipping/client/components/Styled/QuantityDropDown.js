import styled from "styled-components";
export const QuantityDropdownLabel = styled.div`
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 4px;
`;

export const QuantityDropdownBar = styled.select`
  transition: box-shadow 0.5s;
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

export const AddToCartButton = styled.button`
  transition: 0.5s;
  width: 100% !important;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 24px;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  min-height: 48px;
  min-width: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  position: relative;
  text-align: center;
  vertical-align: middle;

  margin-top: 10px;
  color: #FFFFFF;
  background: #222222;

  &:hover {
    transition: opacity 0.5s, -webkit-transform 0.5s, -moz-transform 0.5s;
    opacity: 0.6;
    -webkit-transform: scale(1.02,1.02);
    -moz-transform: scale(1.02,1.02);
  }
`;