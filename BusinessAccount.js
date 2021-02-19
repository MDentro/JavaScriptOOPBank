// Export your class here as module.exports = MyClass

const Account = require("./Account")

class BusinessAccount extends Account {
    constructor(name, balance, creditLimit, sepaPermission) {
        super(name, balance, creditLimit);
        this.withDrawLimit = 20000;
        this.sepaPermission = sepaPermission;

    }
    sepaInvoice(amount) {
        const sepaTransactionCosts = amount * 1 / 100
        if(amount > 0 && this.sepaPermission === true) {
            this.balance = this.balance + amount - sepaTransactionCosts;
        }
    }
}


// bij alles los (nu uitgecomment om hetzelfde te doen met klasses en overerving
// class BusinessAccount {
//     constructor(name, balance, creditLimit, sepaPermission) {
//         this.name = name;
//         this.balance = balance;
//         this.creditLimit = creditLimit;
//         this.sepaPermission = sepaPermission;
//     }
//     makeDeposit(amount) {
//         if(amount > 0) {
//             this.balance = this.balance + amount;
//         }
//     }
//     makeWithdrawal(amount) {
//         const limit = this.balance + this.creditLimit;
//         if(limit > amount && amount < 20000) {
//             this.balance = this.balance - amount;
//         }
//     }
//     sepaInvoice(amount) {
//         const sepaTransactionCosts = amount * 1 / 100
//         if(amount > 0 && this.sepaPermission === true) {
//             this.balance = this.balance + amount - sepaTransactionCosts;
//         }
//     }
// }

module.exports = BusinessAccount;


