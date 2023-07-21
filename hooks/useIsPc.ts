import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export const useIsPc = () => {
  const [isPc, setIsPc] = useState<boolean>(false);
  useEffect(() => {
    setIsPc(!isMobile);
  }, []);
  return isPc;
};
