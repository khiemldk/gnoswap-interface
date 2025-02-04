// TODO : remove eslint-disable after work
/* eslint-disable */
import Header from "@components/common/header/Header";
import { useRouter } from "next/router";
import React, { useState, useCallback } from "react";
import { MATH_NEGATIVE_TYPE } from "@constants/option.constant";
import { type TokenDefaultModel } from "@models/token/token-default-model";
import { useQuery } from "@tanstack/react-query";
import { useWindowSize } from "@hooks/common/use-window-size";

interface NegativeStatusType {
  status: MATH_NEGATIVE_TYPE;
  value: string;
}
export interface Token {
  tokenId: string;
  searchType: string;
  token: TokenDefaultModel;
  price: string;
  priceOf1d: NegativeStatusType;
}

export const RecentdummyToken: Token[] = [
  {
    tokenId: Math.floor(Math.random() * 50 + 1).toString(),
    searchType: "recent",
    token: {
      tokenId: "1",
      name: "Bitcoin",
      symbol: "BTC",
      tokenLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    },
    price: "$12,090.09",
    priceOf1d: {
      status: MATH_NEGATIVE_TYPE.POSITIVE,
      value: "12.08%",
    },
  },
];

export const PopulardummyToken: Token[] = [
  {
    tokenId: Math.floor(Math.random() * 50 + 1).toString(),
    searchType: "popular",
    token: {
      tokenId: "2",
      name: "Gnoland",
      symbol: "GNOT",
      tokenLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
    },
    price: "$12,090.09",
    priceOf1d: {
      status: MATH_NEGATIVE_TYPE.POSITIVE,
      value: "12.08%",
    },
  },
];

async function fetchTokens(
  keyword: string, // eslint-disable-line
): Promise<Token[]> {
  return new Promise(resolve => setTimeout(resolve, 1500)).then(() =>
    Promise.resolve([
      ...RecentdummyToken,
      ...RecentdummyToken,
      ...RecentdummyToken,
      ...PopulardummyToken,
      ...PopulardummyToken,
    ]),
  );
}

const HeaderContainer: React.FC = () => {
  const { pathname } = useRouter();
  const [isConnected, setIsConnected] = useState(true);
  const [sideMenuToggle, setSideMenuToggle] = useState(false);
  const [searchMenuToggle, setSearchMenuToggle] = useState(false);
  const [keyword, setKeyword] = useState("");
  const { breakpoint } = useWindowSize();
  const {
    isFetched,
    error,
    data: tokens,
  } = useQuery<Token[], Error>({
    queryKey: ["tokens", keyword],
    queryFn: () => fetchTokens(keyword),
  });

  const onSideMenuToggle = () => {
    setSideMenuToggle(prev => !prev);
  };

  const onSearchMenuToggle = () => {
    setSearchMenuToggle(prev => !prev);
  };

  const search = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);

  return (
    <Header
      pathname={pathname}
      isConnected={isConnected}
      sideMenuToggle={sideMenuToggle}
      onSideMenuToggle={onSideMenuToggle}
      searchMenuToggle={searchMenuToggle}
      onSearchMenuToggle={onSearchMenuToggle}
      tokens={tokens ?? []}
      isFetched={isFetched}
      error={error}
      search={search}
      keyword={keyword}
      breakpoint={breakpoint}
    />
  );
};

export default HeaderContainer;
