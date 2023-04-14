class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

let worker1 = new Worker('asdasdad', 'asdasdasd', 300, 200);
console.log(worker1);
console.log(worker1.getSalary());
