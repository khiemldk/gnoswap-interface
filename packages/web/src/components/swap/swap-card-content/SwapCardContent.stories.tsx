import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SwapCardContent from "./SwapCardContent";
import { css, Theme } from "@emotion/react";
import {
  coinList,
  dummyAutoRouterInfo,
  dummySwapGasInfo,
} from "@containers/swap-container/SwapContainer";
import { action } from "@storybook/addon-actions";
import { DEVICE_TYPE } from "@styles/media";

export default {
  title: "swap/SwapCardContent",
  component: SwapCardContent,
} as ComponentMeta<typeof SwapCardContent>;

const Template: ComponentStory<typeof SwapCardContent> = args => (
  <div css={wrapper}>
    <div css={contentWrap}>
      <SwapCardContent {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  autoRouter: true,
  showAutoRouter: action("onClick"),
  swapGasInfo: dummySwapGasInfo,
  swapInfo: true,
  showSwapInfo: action("onClick"),
  autoRouterInfo: dummyAutoRouterInfo,
  search: action("search"),
  tokenModal: true,
  onSelectTokenModal: action("onClick"),
  keyword: "",
  coinList: coinList(),
  changeToken: action("changeToken"),
  selectToken: action("selectToken"),
  breakpoint: DEVICE_TYPE.WEB,
  from: {
    token: "USDCoin",
    symbol: "USDC",
    amount: "121",
    price: "$0.00",
    gnosExchangePrice: "1250",
    usdExchangePrice: "($1541.55)",
    balance: "0",
    tokenLogo:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
  },
  to: {
    token: "HEX",
    symbol: "HEX",
    amount: "5000",
    price: "$0.00",
    gnosExchangePrice: "1250",
    usdExchangePrice: "($1541.55)",
    balance: "0",
    tokenLogo:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39/logo.png",
  },
};

const wrapper = (theme: Theme) => css`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const contentWrap = (theme: Theme) => css`
  width: 500px;
`;
