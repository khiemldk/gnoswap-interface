import TokenChartInfo, { type TokenChartInfoProps } from "./TokenChartInfo";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "token/TokenChartInfo",
  component: TokenChartInfo,
} as Meta<typeof TokenChartInfo>;

export const Default: StoryObj<TokenChartInfoProps> = {
  args: {
    token: {
      name: "Gnoswap",
      symbol: "GNOS",
      image: "https://miro.medium.com/v2/resize:fill:44:44/1*61CWWk33Fx8vLVvto5nJHQ.png",
    },
    priceInfo: {
      amount: {
        value: 0.9844,
        denom: "UTC",
      },
      changedRate: 7.43,
    },
  },
};