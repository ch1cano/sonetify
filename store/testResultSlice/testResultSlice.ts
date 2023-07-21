import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TestResult } from "@/models/testResult";
import { StoreState } from "../index";

const initialState: Record<TestResult, number> = {
  униженность: 0,
  покинутость: 0,
  предательство: 0,
  несправедливость: 0,
  отвергнутость: 0,
};

const testResultSlice = createSlice({
  initialState,
  name: "testResult",
  reducers: {
    addPoint: (state, action: PayloadAction<TestResult>) => {
      state[action.payload] = state[action.payload] + 1;
    },
  },
});

export const { actions: testResultActions, reducer: testResultReducer } =
  testResultSlice;
export const selectTestResult = (store: StoreState) => store.testResult;
