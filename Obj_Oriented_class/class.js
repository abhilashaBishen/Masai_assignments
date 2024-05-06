

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static greet() {
        return "Hello there!"
    }
}
Person.prototype.canSleep = function (params) {
    return `${this.name} is sleeping`
}

const person1 = new Person('john', 23)
console.log(person1.canSleep())

console.log(Person.greet())


class Employee extends Person {
    #salary;
    constructor(name, age, salary) {
        super(name, age)
        this.#salary = salary;
    }

    get salary() {
        return this.#salary;
    }

    set salary(new_salary) {
        if (new_salary > 0) {
            return this.#salary = new_salary;
        } else {
            return "Salary must be a positive number"
        }
    }


    working() {
        return `${this.name} is working`
    }
}


const employee1 = new Employee("aditya", 33, 120000)

console.log(employee1.salary, employee1.working());

class Manager extends Employee {
    static getRole() {
        return "Manager"
    }

    managing() {
        return `${this.name} is managing`
    }
}

class Executive extends Manager {
    #bonus

    constructor(name, age, salary, bonus) {
        super(name, age, salary)
        this.#bonus = bonus;
    }

    get bonus() {
        return this.#bonus;
    }

    set bonus(new_bonus) {
        if (new_bonus > 0) {
            return this.#bonus = new_bonus;
        }
        else {
            return "bonus should be a +ve number"
        }
    }
}



const manager = new Manager("Charlie", 40, 60000);
console.log(Manager.getRole());
console.log(manager.managing());

const executive = new Executive("Dave", 45, 70000, 20000);
console.log(executive.bonus);
executive.bonus = -5000;
console.log(executive.bonus);