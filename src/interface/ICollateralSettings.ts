import { BigNumber } from "ethers";

export interface ICollateralSettings {
  isValid: boolean;
  creditLimitRate: any;
  liqLimitRate: number;
  decimals: number;
  totalBorrowCap: BigNumber;
}
