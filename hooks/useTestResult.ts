import { useDispatch, useSelector } from "react-redux";

import { TestResult } from "@/models/testResult";
import {
  selectTestResult,
  testResultActions,
} from "@/store/testResultSlice/testResultSlice";

export const useTestResult = () => {
  const testResult = useSelector(selectTestResult);
  const dispatch = useDispatch();
  const addPoint = (testResultParam: TestResult) => {
    dispatch(testResultActions.addPoint(testResultParam));
  };
  return { addPoint, testResult };
};
