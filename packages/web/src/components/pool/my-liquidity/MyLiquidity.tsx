import React from "react";
import MyLiquidityContent from "@components/pool/my-liquidity-content/MyLiquidityContent";
import MyLiquidityHeader from "@components/pool/my-liquidity-header/MyLiquidityHeader";
import { PoolDivider, MyLiquidityWrapper } from "./MyLiquidity.styles";
import { DEVICE_TYPE } from "@styles/media";
import MyPositionCard from "../my-position-card/MyPositionCard";

interface MyLiquidityProps {
  info: any;
  breakpoint: DEVICE_TYPE;
}

const MyLiquidity: React.FC<MyLiquidityProps> = ({ info, breakpoint }) => {
  return (
    <MyLiquidityWrapper>
      <div className="liquidity-wrap">
        <MyLiquidityHeader info={info.poolInfo} />
        <MyLiquidityContent content={info} breakpoint={breakpoint} />
      </div>
      <PoolDivider />
      {breakpoint !== DEVICE_TYPE.MOBILE ? (
        info.positionList.map((item: any, idx: number) => (
          <MyPositionCard content={item} key={idx} breakpoint={breakpoint} />
        ))
      ) : (
        <>
          <div className="slider-wrap">
            <div className="box-slider">
              {info.positionList.map((item: any, idx: number) => (
                <MyPositionCard
                  content={item}
                  key={idx}
                  breakpoint={breakpoint}
                />
              ))}
            </div>
          </div>
          <div className="box-indicator">
            <span className="current-page">1</span>
            <span>/</span>
            <span>{info.positionList.length}</span>
          </div>
        </>
      )}
    </MyLiquidityWrapper>
  );
};

export default MyLiquidity;
