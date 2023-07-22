function add(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return 'Помилка: обидва аргументи повинні бути числами';
    }
    return a + b;
}

function sub(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return 'Помилка: обидва аргументи повинні бути числами';
    }
    return a - b;
}

function mul(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return 'Помилка: обидва аргументи повинні бути числами';
    }
    return a * b;
}

function div(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return 'Помилка: обидва аргументи повинні бути числами';
    }
    if (b === 0) {
        return 'Помилка: ділення на нуль'
    }
    return a / b;
}

function calc(a, b, operation) {
    return operation(a, b)
}

console.log(calc(10, 5, add));
console.log(calc(10, 5, sub));
console.log(calc(10, 5, mul));
console.log(calc(10, 5, div));
console.log(calc(10, 0, div));
console.log(calc(10, 'char', add));
