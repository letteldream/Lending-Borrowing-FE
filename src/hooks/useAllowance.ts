import { useCallback, useEffect, useState } from "react";
import { useWallet } from "use-wallet";
import { BigNumber } from "ethers";
import ERC20 from "abi/types/ERC20";
import { useWeb3 } from "state/web3";

const useAllowance = (
  token: ERC20,
  spender: string,
  pendingApproval?: boolean
) => {
  const [allowance, setAllowance] = useState<BigNumber>(BigNumber.from(0));
  const { account } = useWeb3();

  const fetchAllowance = useCallback(async () => {
    if (account) {
      console.log("account", account);
      console.log("spender", spender);
      const allowance = await token.allowance(account, spender);
      console.log("allowance", allowance);
      setAllowance(allowance);
    }
  }, [account, spender, token]);

  useEffect(() => {
    if (account && spender && token) {
      fetchAllowance().catch((err) =>
        console.error(`Failed to fetch allowance: ${err.stack}`)
      );
    }
  }, [account, spender, token, pendingApproval, fetchAllowance]);

  return allowance;
};

export default useAllowance;
