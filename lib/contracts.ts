import {ArgentTMA, type SessionAccountInterface} from "@argent/tma-wallet";
import type { Call, Contract } from 'starknet';

export const initWallet = (contractAddress: string) =>
    ArgentTMA.init({
      environment: 'sepolia',
      appName: "Fundmate",
      appTelegramUrl: "",
      sessionParams: {
        allowedMethods: [
          { contract: contractAddress, selector: 'create_split_payment_request' },
          { contract: contractAddress, selector: 'pay_contribution' },
          { contract: contractAddress, selector: 'finalize_payment' },
          { contract: contractAddress, selector: 'refund' },
          { contract: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d", selector: 'approve' },
          { contract: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d", selector: 'increase_allowance' },
          { contract: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d", selector: 'increaseAllowance' },
          { contract: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d", selector: 'transfer' },
          { contract: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d", selector: 'transfer_from' },
          { contract: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d", selector: 'transferFrom' },
        ],
        validityDays: 90,
      },
    });

    export async function executeContractAction(
        contract: Contract,
        account: SessionAccountInterface,
        argentTMA: ArgentTMA,
        action: string,
        successMessage: string,
        errorMessage: string
      ) {
        const call: Call = {
          contractAddress: contract.address,
          entrypoint: action,
          calldata: [],
        };
      
        try {
          const fees = await account?.estimateInvokeFee([call]);
          const tx = await contract[action]({
            maxFee: fees?.suggestedMaxFee ? BigInt(fees.suggestedMaxFee) * BigInt(2) : undefined,
          });
          await argentTMA.provider.waitForTransaction(tx.transaction_hash);
          console.log(successMessage)
          return true;
        } catch (error) {
          console.error(`Error performing ${action}:`, error);
          console.log(errorMessage)
          return false;
        }
      }