import { configureStore } from "@reduxjs/toolkit";

import { selectedLinkReducer } from "./selectedLinkSlice/selectedLinkSlice";
import { testResultReducer } from "./testResultSlice/testResultSlice";

export const store = configureStore({
  reducer: {
    testResult: testResultReducer,
    selectedLink: selectedLinkReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
