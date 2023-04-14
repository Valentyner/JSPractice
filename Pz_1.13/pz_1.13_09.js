class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary(rate, days) {
        return rate * days;
    }
}

let worker1 = new Worker('asdasdad', 'asdasdasd', 300, 200);
console.log(worker1);
console.log(worker1.getSalary(worker1.rate, worker1.days));
