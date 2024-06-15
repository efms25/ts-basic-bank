export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  protected setBalance(val: number):void {
    this.balance = val;
  }

  public getBalance(): number {
    return this.balance;
  }

  deposit = (val: number): void => {
    if(this.validateStatus()){
      this.balance += val
    } else {
      console.log('Conta inválida')
    }
  }

  withdraw = (val: number): void => {
    if(this.validateStatus()){
      if(this.balance > val){
        this.balance -= val
        console.log(`Voce Sacou ${val}`)
      }
    } else {
      console.log('Conta inválida')
    }
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
