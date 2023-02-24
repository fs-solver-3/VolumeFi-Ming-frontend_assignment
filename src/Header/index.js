import React from "react";
import PageButton from "./PageButton";
import ConnectButton from "./ConnectButton";
import Logo from "../assets/images/Logo/Logo.png";

import "./header.css";

const Header = (props) => {
  console.log(props);
  return (
    <div className="headerContainer">
      <div className="appNav">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="buttonContainer">
          <PageButton name={"Swap"} isBold={true} />
          <PageButton name={"Pool"} />
          <PageButton name={"Vote"} />
        </div>
      </div>
      <div className="rightNav">
        <div className="connectButtonContainer">
          <ConnectButton network={props.network} />
        </div>
      </div>
    </div>
  );
};

export default Header;
