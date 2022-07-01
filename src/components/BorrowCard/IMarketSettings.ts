import { IMarketRate } from "./IMarketRate";

export interface IMarketSettings {
  interestApr: IMarketRate; // debt interest rate in APR
  orgFeeRate: IMarketRate; // fees that will be charged upon minting AirUSD (0.3% in AirUSD)
  liquidationPenalty: IMarketRate; // liquidation penalty fees (5%)
}
