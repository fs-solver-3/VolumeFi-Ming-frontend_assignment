import React, { useState } from "react";
import PageButton from "./PageButton";
import { ethers } from "ethers";
import {
  getAccount,
  getFactory,
  getRouter,
  getNetwork,
  getWeth,
} from "../ethereumFunctions";
import COINS from "../constants/coins";
import * as chains from "../constants/chains";
import EthIcon from "../assets/images/Tokens/ETH.svg";
import ConnectedLight from "../assets/images/Others/Connected.svg";

const ConnectButton = (props) => {
  const { network } = props;
  const [isConnected, setConnected] = useState(false);

  async function setupConnection() {
    try {
      console.log("lets go!");
      network.provider = new ethers.providers.Web3Provider(window.ethereum);
      network.signer = await network.provider.getSigner();
      await getAccount().then(async (result) => {
        network.account = result;
      });

      await getNetwork(network.provider).then(async (chainId) => {
        // Set chainID
        network.chainID = chainId;
        if (chains.networks.includes(chainId)) {
          // Get the router using the chainID
          network.router = await getRouter(
            chains.routerAddress.get(chainId),
            network.signer
          );
          // Get default coins for network
          network.coins = COINS.get(chainId);
          // Get Weth address from router
          await network.router.WETH().then((wethAddress) => {
            network.weth = getWeth(wethAddress, network.signer);
            // Set the value of the weth address in the default coins array
            network.coins[0].address = wethAddress;
          });
          // Get the factory address from the router
          await network.router.factory().then((factory_address) => {
            network.factory = getFactory(factory_address, network.signer);
          });
          setConnected(true);
          console.log("lets go!");
        } else {
          console.log("Wrong network mate.");
          setConnected(false);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
  const displayAddress = `${network?.account
    ?.toString()
    .substring(0, 6)}...${network?.account?.toString().substring(-4, 4)}`;

  return (
    <>
      {isConnected ? (
        <div className="walletContainer">
          <img src={EthIcon} alt="Ether Icon" className="ethIcon"/>
          <span>Ethereum</span>
          <img src={ConnectedLight} alt="Connected Light" />
          <PageButton name={displayAddress} />
        </div>
      ) : (
        <div className="btn connectButton" onClick={() => setupConnection()}>
          Connect Wallet
        </div>
      )}
    </>
  );
};

export default ConnectButton;
