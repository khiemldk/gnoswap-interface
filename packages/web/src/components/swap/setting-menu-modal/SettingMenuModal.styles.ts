import mixins from "@styles/mixins";
import { fonts } from "@constants/font.constant";
import styled from "@emotion/styled";
import { Z_INDEX } from "@styles/zIndex";

export const SettingMenuModalWrapper = styled.div`
  ${mixins.flexbox("column", "flex-start", "flex-start")};
  z-index: ${Z_INDEX.modal};
  position: absolute;
  width: 236px;
  padding: 16px 0px;
  gap: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.background06};
  border: 1px solid ${({ theme }) => theme.color.border02};
  box-shadow: 8px 8px 20px 0px rgba(0, 0, 0, 0.08);
  top: 100px;
  right: 0px;

  .modal-body {
    ${mixins.flexbox("column", "flex-start", "flex-start")};
    width: 100%;
    padding: 0px 16px;
    gap: 16px;

    .modal-header {
      ${mixins.flexbox("row", "center", "space-between")};
      width: 100%;
      span {
        ${fonts.body9}
        color: ${({ theme }) => theme.color.text02};
      }
      .close-wrap {
        ${mixins.flexbox("row", "center", "flex-end")};
        cursor: pointer;
        width: 24px;
        height: 24px;
        .close-icon {
          width: 16px;
          height: 16px;
          * {
            fill: ${({ theme }) => theme.color.icon07};
          }
        }
      }
    }

    .title {
      ${mixins.flexbox("row", "center", "flex-start")};
      width: 100%;
      gap: 4px;
      span {
        ${fonts.body12}
        color: ${({ theme }) => theme.color.text04};
      }
      .info-wrap {
        ${mixins.flexbox("row", "center", "center")};
        width: 16px;
        height: 16px;
        cursor: pointer;
        .info-icon {
          * {
            fill: ${({ theme }) => theme.color.icon03};
          }
        }
      }
    }

    .setting-input {
      ${mixins.flexbox("row", "center", "space-between")};
      width: 100%;
      gap: 8px;
      .input-button {
        ${mixins.flexbox("row", "center", "flex-start")};
        width: 136px;
        height: 36px;
        padding: 0px 16px;
        border-radius: 8px;
        ${fonts.body9};
        color: ${({ theme }) => theme.color.text03};
        border: 1px solid ${({ theme }) => theme.color.border02};
        background: ${({ theme }) => theme.color.background01};
      }
      .amount-text {
        ${mixins.flexbox("row", "center", "flex-end")};
        text-align: right;
        width: 100%;
      }
    }
  }
`;

export const ModalTooltipWrap = styled.div`
  ${mixins.flexbox("column", "center", "flex-start")};
  ${fonts.body12};
  color: ${({ theme }) => theme.color.text15};
  background-color: ${({ theme }) => theme.color.background14};
  .tooltip-wrap {
    ${mixins.flexbox("column", "flex-start", "flex-start")};
  }
`;
