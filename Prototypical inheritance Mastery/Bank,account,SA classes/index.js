

class Bank{
    #name
    constructor(name){
        this.#name = name;
    }

    get Name(){
        return `${this.#name}`
    }
}

class Account extends Bank{
    #balance
    constructor(name,balance){
        super(name)
        this.#balance = balance;
    }

    get Balance(){
        return `${this.#balance}`
    }
}

// Class Definition: SavingsAccount
class SavingsAccount extends Account{
    #interestRate

    constructor(name,balance,interestRate){
        super(name,balance);
        this.#interestRate = interestRate;
    }

    get InterestRate (){
        return this.#interestRate
    }


    set InterestRate(value){
     this.#interestRate  = value;

    }
}



const bank1 = new Bank("BOI");
console.log(bank1.Name)

const account1 = new Account("sbi",10000);


const savingAccount1 = new SavingsAccount("MySavingsBank", 1000, 0.05);

console.log("Bank Name:", savingAccount1.Name);  
console.log("Account Balance:",savingAccount1.Balance); 
console.log("Interest Rate:", savingAccount1.InterestRate);