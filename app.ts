import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { FundingAccount } from './class/FundingAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Donald', 5)
const companyAccount: CompanyAccount = new CompanyAccount('Mickey', 20)
const fundingAccount: FundingAccount = new FundingAccount('Tio Patinhas', 50)

console.log('--peopleAccount')

console.log(peopleAccount.getName())
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
console.log(peopleAccount.getBalance());

console.log('End--peopleAccount')


console.log('--CompanyAccount')

console.log(companyAccount.getName())
companyAccount.deposit(100);
companyAccount.withdraw(50);
companyAccount.getLoan(10000);
console.log(companyAccount.getBalance());


console.log('End--CompanyAccount')

console.log('--FundingAccount')

console.log(fundingAccount.getName())
fundingAccount.deposit(100);
fundingAccount.withdraw(50);
console.log(fundingAccount.getBalance());


console.log('End--FundingAccount')