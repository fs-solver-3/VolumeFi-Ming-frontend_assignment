import { useRef } from "react";

const Web3Provider = (props) => {
  let network = Object.create({});
  network.provider = useRef(null);
  network.signer = useRef(null);
  network.account = useRef(null);
  network.coins = [];
  network.chainID = useRef(null);
  network.router = useRef(null);
  network.factory = useRef(null);
  network.weth = useRef(null);

  return <div> {props.render(network)}</div>;
};

export default Web3Provider;
