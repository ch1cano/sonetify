import { useDispatch, useSelector } from "react-redux";

import {
  selectLinkState,
  selectedLinkActions,
} from "@/store/selectedLinkSlice/selectedLinkSlice";

export const useSelectedLink = () => {
  const { value: selectedLink } = useSelector(selectLinkState);
  const dispatch = useDispatch();
  const setSelectedLink = (newLink: string) => {
    dispatch(selectedLinkActions.set({ selectedLink: newLink }));
  };
  return {
    selectedLink,
    setSelectedLink,
  };
};
