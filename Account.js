// Export your class here as module.exports = MyClass

class Account {
    constructor(name, balance, creditLimit) {
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
        this.withDrawLimit = 5000
    }
    makeDeposit(amount) {
        //console.log("storting", amount, amount < 0);
        if(amount > 0) {
            this.balance = this.balance + amount;
        }
    }
    makeWithdrawal(amount) {
        //console.log("withdraw")
        if(amount < this.balance && amount < this.withDrawLimit) {
            this.balance = this.balance - amount;
        }
    }
}
module.exports = Account;


