import HomeSwap from "@components/home/home-swap/HomeSwap";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

const HomeSwapContainer: React.FC = () => {
  const router = useRouter();
  const [width, setWidth] = useState(Number);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const swapNow = useCallback(() => {
    router.push("/swap?from=GNOT&to=GNOS");
  }, [router]);

  return (
    <HomeSwap
      from={{
        token: {
          tokenId: "USDCoin",
          name: "USDC",
          symbol: "USDC",
          tokenLogo:
            "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
        },
        amount: "121",
        price: "$0.00",
        balance: "0",
      }}
      to={{
        token: {
          tokenId: "HEX",
          name: "HEX",
          symbol: "HEX",
          tokenLogo:
            "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39/logo.png",
        },
        amount: "5000",
        price: "$0.00",
        balance: "0",
      }}
      swapNow={swapNow}
      windowSize={width}
    />
  );
};

export default HomeSwapContainer;
