let rupeesym = '\u20B9';
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber,
        this.name = name,
        this.type = type,
        this.balance = balance,
        this.noOfTractions = 0;

    this.deposit = function (deposited_Amount) {
        if (deposited_Amount !== undefined) {
            this.balance += deposited_Amount;
            this.noOfTractions++;
           return ` ${deposited_Amount} ${rupeesym} deposited in your account `;
        }
        else {
            return 'No deposit';
        }

    }

    this.withdraw = function (withdraw_Amount) {
        if (withdraw_Amount === undefined) {
            console.log(`enter withdraw amount`);
        }
        else if (this.balance + 500 > withdraw_Amount) {
            this.balance = this.balance - withdraw_Amount;
            this.noOfTractions++;
            return `${withdraw_Amount}${rupeesym} withdrawn from Account`;
        }
        else {
            return `You have not enought balance ,Total balance in your Account is ${this.balance}${rupeesym}`;
        }
    }

    this.checkBalance = function () {
        return ` current balanace is ${this.balance} ${rupeesym}`
    }

    this.isActive = function () {
        if (this.noOfTractions > 0) {
            return `Active`;
        }
        else {
            return `Inactive`;
        }
    }

};


let bank_account1 = new BankAccount('23', 'aanna', 'savn', 2335);
let bank_account2 = new BankAccount('223', 'canna', '2savn', 335);
let  bank_account3 = new BankAccount('232', 'banna', 'savn3', 62335);
let  bank_account4 = new BankAccount('232', 'banna', 'savn3', 1162335);
let  bank_account5 = new BankAccount('12356','anny','currentAccount',100000);
bank_account1.deposit(2222);
console.log( bank_account1.balance)
bank_account4.withdraw(1000000)

console.log( bank_account2);




