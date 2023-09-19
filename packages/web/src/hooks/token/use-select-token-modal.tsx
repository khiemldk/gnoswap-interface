import SelectTokenContainer from "@containers/select-token-container/SelectTokenContainer";
import { TokenDefaultModel } from "@models/token/token-default-model";
import { CommonState } from "@states/index";
import { useAtom } from "jotai";
import { useCallback } from "react";

export interface SelectTokenModalProps {
  changeToken?: (token: TokenDefaultModel) => void;
}
export interface SelectTokenModalModel {
  openModal: () => void;
}

export const useSelectTokenModal = ({ changeToken }: SelectTokenModalProps): SelectTokenModalModel => {
  const [, setOpenedModal] = useAtom(CommonState.openedModal);
  const [, setModalContent] = useAtom(CommonState.modalContent);

  const openModal = useCallback(() => {
    setOpenedModal(true);
    setModalContent(
      <SelectTokenContainer
        changeToken={changeToken}
      />
    );
  }, [changeToken, setModalContent, setOpenedModal]);

  return {
    openModal
  };
};