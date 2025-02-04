import React from "react";
import MyLiquidity from "@components/pool/my-liquidity/MyLiquidity";
import { FEE_RATE_OPTION } from "@constants/option.constant";
import { useWindowSize } from "@hooks/common/use-window-size";

export const liquidityInit = {
  poolInfo: {
    tokenPair: {
      token0: {
        tokenId: Math.floor(Math.random() * 50 + 1).toString(),
        name: "HEX",
        symbol: "HEX",
        compositionPercent: "50",
        composition: "50.05881",
        amount: {
          value: "18,500.18",
          denom: "gnot",
        },
        tokenLogo:
          "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39/logo.png",
      },
      token1: {
        tokenId: Math.floor(Math.random() * 50 + 1).toString(),
        name: "USDCoin",
        symbol: "USDC",
        compositionPercent: "50",
        composition: "150.0255",
        amount: {
          value: "18,500.18",
          denom: "gnot",
        },
        tokenLogo:
          "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
      },
    },
    token0Rate: "50%",
    token1Rate: "50%",
    feeRate: FEE_RATE_OPTION.FEE_3,
  },
  totalBalance: "$1.24m",
  swapFees: "150",
  dailyEarn: "$954.52",
  claimRewards: "$3,052.59",
  positionList: [
    {
      productId: 982932,
      tokenPair: {
        token0: {
          tokenId: Math.floor(Math.random() * 50 + 1).toString(),
          name: "HEX",
          symbol: "HEX",
          tokenLogo:
            "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39/logo.png",
        },
        token1: {
          tokenId: Math.floor(Math.random() * 50 + 1).toString(),
          name: "USDCoin",
          symbol: "USDC",
          tokenLogo:
            "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
        },
        isStaked: true,
        range: true,
        balance: "18,092.45",
        totalRewards: "1,015.24",
        estimatedAPR: "90.5",
        minAmount: "1,105.1",
        maxAmount: "1,268.2",
      },
    },
    {
      productId: 982933,
      tokenPair: {
        token0: {
          tokenId: Math.floor(Math.random() * 50 + 1).toString(),
          name: "HEX",
          symbol: "HEX",
          tokenLogo:
            "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39/logo.png",
        },
        token1: {
          tokenId: Math.floor(Math.random() * 50 + 1).toString(),
          name: "USDCoin",
          symbol: "USDC",
          tokenLogo:
            "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
        },
        isStaked: true,
        range: true,
        balance: "18,092.45",
        totalRewards: "1,015.24",
        estimatedAPR: "90.5",
        minAmount: "1,105.1",
        maxAmount: "1,268.2",
      },
    },
    {
      productId: 982934,
      tokenPair: {
        token0: {
          tokenId: Math.floor(Math.random() * 50 + 1).toString(),
          name: "HEX",
          symbol: "HEX",
          tokenLogo:
            "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39/logo.png",
        },
        token1: {
          tokenId: Math.floor(Math.random() * 50 + 1).toString(),
          name: "USDCoin",
          symbol: "USDC",
          tokenLogo:
            "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
        },
        isStaked: false,
        range: false,
        balance: "18,092.45",
        totalRewards: "1,015.24",
        estimatedAPR: "90.5",
        minAmount: "1,105.1",
        maxAmount: "1,268.2",
      },
    },
  ],
};

const MyLiquidityContainer: React.FC = () => {
  const { breakpoint } = useWindowSize();

  return <MyLiquidity info={liquidityInit} breakpoint={breakpoint} />;
};

export default MyLiquidityContainer;
