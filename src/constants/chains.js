export const networks = [1, 5];

export const ChainId = {
  MAINNET: 1,
  GÖRLI: 5,
};

export const routerAddress = new Map();
routerAddress.set(
  ChainId.MAINNET,
  "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
);
routerAddress.set(ChainId.GÖRLI, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
