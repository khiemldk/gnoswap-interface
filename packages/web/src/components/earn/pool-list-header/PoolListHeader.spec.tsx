import { render } from "@testing-library/react";
import { Provider as JotaiProvider } from "jotai";
import GnoswapThemeProvider from "@providers/gnoswap-theme-provider/GnoswapThemeProvider";
import PoolListHeader from "./PoolListHeader";
import { POOL_TYPE } from "@containers/pool-list-container/PoolListContainer";
import { DEVICE_TYPE } from "@styles/media";

describe("PoolListHeader Component", () => {
  it("PoolListHeader render", () => {
    const mockProps = {
      poolType: POOL_TYPE.ALL,
      changePoolType: () => {},
      search: () => {},
      keyword: "",
      breakpoint: DEVICE_TYPE.WEB,
      searchIcon: true,
      onTogleSearch: () => null,
    };

    render(
      <JotaiProvider>
        <GnoswapThemeProvider>
          <PoolListHeader {...mockProps} />
        </GnoswapThemeProvider>
      </JotaiProvider>,
    );
  });
});
