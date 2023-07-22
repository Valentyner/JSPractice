function Greetable (str) {
    this.str = str;
}

Greetable.prototype.greet = function(greeting) {
    return `${greeting}, ${this.str} !`
};

function createGreetable(str) {
    return new Greetable(str);
}

const g = createGreetable('Oleg');
console.log(g.greet('Hello'));

console.log(createGreetable('Oleg'))

