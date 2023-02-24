import React from "react";
import SearchInput from "./searchInput";
import logo from "../../assets/images/logo/logo.png";

function TopSection ({api})  {
  return (
    <div className="main-container">
      <img src={logo} className="logo"/>
      <SearchInput api = {(api)}/>
    </div>
  );
};
export default TopSection;