//easy tasks
console.log('1. Car Showroom Database');
const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: '2022',
    getInfo: function() {
        return (`${this.brand}, ${this.model}, ${this.year}`);
    },
};

car.brand = 'Audi';
car.color = "Black";
delete car.model;
console.log(car.getInfo());

console.log('');
console.log('2. Virtual Assistant – Meet the User! 💬');

const person = {
    name: 'Luna',
    age: '23',
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
};
person.greet();

console.log('');
console.log('3. Student Dashboard 🎓');

const student = {
    name: 'Jesica',
    age: 22,
    grades: [10, 9, 9.5],
};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

console.log('');
console.log('4. The Online Bookstore 📚');

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getInfo = function() {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
};

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);


console.log(book1.getInfo()); 
console.log(book2.getInfo());

//medium tasks

console.log('');
console.log('5. Virtual Pet Adoption Center 🐶');

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log('Animal sound');
    }
}

const animal1 = new Animal('Lilu', 'Dog');
animal1.makeSound();

console.log('');
console.log('6. Secure Banking System 🏦');

class BankAccount {
    #balance;

    constructor(initialAmount) {
        this.#balance = initialAmount;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }else {
            console.log('Invalid deposit amount');
        }
    }

    withdraw(amount) {
        if(amount <= this.#balance) {
            this.#balance -= amount;
        }else{
            console.log('Not enough money');
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500); 
myAccount.withdraw(200); 
console.log(myAccount.getBalance());

console.log('');
console.log('7. Employee Management System 👨‍💼');

class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        console.log(`${this.name} earns $${this.salary}`);

    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    getDetails(){
        console.log(`${this.name} earns $${this.salary} and manages ${this.department} department`);
    }
}

const emp = new Employee('Sofo', 2500);
emp.getDetails();

const mgr = new Manager('Tekla', 5000, 'IT');
mgr.getDetails();



