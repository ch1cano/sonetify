import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { StoreState } from "../index";

const initialState: Record<"value", string> = {
  value: "/",
};

const selectedLinkSlice = createSlice({
  initialState,
  name: "selectedLink",
  reducers: {
    set: (state, action: PayloadAction<{ selectedLink: string }>) => {
      state.value = action.payload.selectedLink;
    },
  },
});

export const { actions: selectedLinkActions, reducer: selectedLinkReducer } =
  selectedLinkSlice;
export const selectLinkState = (store: StoreState) => store.selectedLink;
