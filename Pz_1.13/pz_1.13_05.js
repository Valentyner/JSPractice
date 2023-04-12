function sequence(start = 0, step = 1) {
    return generating(start, step)
};

function* generating(start, step) {
    let value = start;
    while(true){
         yield value;
         value += step;
    }
};

let generator = sequence(10, 3);
let generator2 = sequence(7, 1);
let generator3 = sequence();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator2.next().value);
console.log(generator.next().value);
console.log(generator2.next().value);
console.log(generator3.next().value);
console.log(generator3.next().value);
console.log(generator3.next().value);
console.log(generator3.next().value);