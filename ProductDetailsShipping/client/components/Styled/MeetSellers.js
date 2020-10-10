import styled from "styled-components";
export const MeetYourSellersText = styled.div`
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  color: #595959 !important;
  padding-bottom: 12px !important;
  box-sizing: border-box;
`;

export const SellerUsernameBottom = styled.div`
  line-height: 24px;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 6px !important;
  box-sizing: border-box;
  position: relative;
  top: 10px;
  left: 10px;
`;

export const SellerDetails = styled.div`
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  color: #595959 !important;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  position: relative;
  top: 10px;
  left: 10px;
`;

export const MeetSellersCreator = styled.div`
  text-decoration: underline;
  transition: opacity 200ms ease-out;
  position: relative;
  z-index: 0;
  background: transparent;
  color: #595959 !important;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  box-sizing: border-box;

  &:link {text-decoration: none;}
  &:visited {text-decoration: none;}
  &:hover {text-decoration: underline;}
  &:active {text-decoration: underline;}
`;

export const MessageCreatorButton = styled.button`
  width: 100% !important;
  font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
  background: none;
  border-style: solid;
  border-width: 2px;
  border-radius: 6px;
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
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    transition: -webkit-transform 0.5s, -moz-transform 0.5s;
    -webkit-transform: scale(1.02,1.02);
    -moz-transform: scale(1.02,1.02);
  }
`;
