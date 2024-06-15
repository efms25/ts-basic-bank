import { DioAccount } from "./DioAccount";

class FundingAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (val: number): void => {
        let balance = this.getBalance();
        this.setBalance(balance + val + 10);
    }
}

export { FundingAccount }