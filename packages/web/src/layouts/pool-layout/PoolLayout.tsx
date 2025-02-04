import IconStrokeArrowRight from "@components/common/icons/IconStrokeArrowRight";
import React from "react";
import { PoolLayoutWrapper } from "./PoolLayout.styles";

interface PoolLayoutProps {
  header: React.ReactNode;
  poolPairInformation: React.ReactNode;
  liquidity: React.ReactNode;
  staking: React.ReactNode;
  footer: React.ReactNode;
}

const PoolLayout: React.FC<PoolLayoutProps> = ({
  header,
  poolPairInformation,
  liquidity,
  staking,
  footer,
}) => (
  <PoolLayoutWrapper>
    {header}
    <div className="pool-section">
      <div className="summury-container">{poolPairInformation}</div>
      <div className="positions-container">{liquidity}</div>
      <div className="staking-container">
        {staking}
        <div className="button">
          <span>Want to boost up incentives for this pool?&nbsp;</span>
          <div className="pointer-wrap">
            <span> Click here to start the process</span>
            <IconStrokeArrowRight className="arrow-icon" />
          </div>
        </div>
      </div>
    </div>
    {footer}
  </PoolLayoutWrapper>
);

export default PoolLayout;
