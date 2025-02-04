import { fonts } from "@constants/font.constant";
import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import mixins from "@styles/mixins";

export const TableWrapper = styled.div`
  ${mixins.flexbox("column", "flex-start", "center")};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.border01};
  border-radius: 8px;
  margin: 24px 0px;

  color: ${({ theme }) => theme.color.text04};
  ${fonts.body11};
  overflow-x: auto;
  .scroll-wrapper {
    ${mixins.flexbox("column", "flex-start", "flex-start")};
    height: auto;
    width: auto;
  }
  .token-list-head {
    width: 100%;
    ${mixins.flexbox("row", "flex-start", "flex-start")};
    height: 50px;
    ${fonts.body12};
    border-bottom: 1px solid ${({ theme }) => theme.color.border02};
  }

  .token-list-body {
    ${mixins.flexbox("column", "flex-start", "center")};
    width: 100%;
  }
`;

export const TableHeader = styled.div<{ tdWidth: number }>`
  width: ${({ tdWidth }) => `${tdWidth}px`};
  height: 100%;
  padding: 16px;
  ${mixins.flexbox("row", "center", "flex-end")};
  &.left {
    flex-shrink: 0;
    justify-content: flex-start;
  }

  .index,
  .name {
    flex-shrink: 0;
    justify-content: flex-start;
  }

  span {
    display: inline-flex;
    align-items: center;
    white-space: pre;
  }

  &.left span {
    flex-direction: row-reverse;
  }
  &.sort span {
    cursor: pointer;
  }

  .icon {
    width: 20px;
    height: 20px;
    align-items: center;
    * {
      fill: ${({ theme }) => theme.color.text04};
    }
  }
`;

export const MobileTableHeader = styled.div<{ tdWidth: number }>`
  width: ${({ tdWidth }) => `${tdWidth}px`};
  height: 100%;
  ${mixins.flexbox("row", "center", "flex-end")};
  &.left {
    flex-shrink: 0;
    justify-content: flex-start;
  }

  .index {
    padding: 0px 16px 0px 8px;
  }
  .index,
  .name {
    flex-shrink: 0;
    justify-content: flex-start;
  }
  &:nth-last-of-type(1) {
    padding: 0px 16px 0px 0px;
  }

  span {
    display: inline-flex;
    align-items: center;
    white-space: pre;
  }

  &.left span {
    flex-direction: row-reverse;
  }
  &.sort span {
    cursor: pointer;
  }

  .icon {
    width: 20px;
    height: 20px;
    align-items: center;
    * {
      fill: ${({ theme }) => theme.color.text04};
    }
  }
`;

export const noDataText = (theme: Theme) => css`
  ${mixins.flexbox("row", "center", "center")};
  color: ${theme.color.text04};
  ${fonts.body12};
  width: 100%;
  height: 300px;
`;
