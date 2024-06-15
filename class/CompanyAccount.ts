import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (val: number): void => {
    if(this.validateStatus()) {
      let balance = this.getBalance();
      this.setBalance(balance + val);
      console.log(`Voce pegou um empréstimo de ${val}`)
    } else {
      console.log("Conta inválida")
    }
  }
}
