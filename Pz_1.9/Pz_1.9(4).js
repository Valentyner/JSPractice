let number = prompt(title)

for(let i = 1; i <= number; i++){
    console.log('*'.repeat(i))
}
for(let i = 1 , j = Math.floor(12/2); i <=13 && j >= 0; i+=2, j--){
    console.log(' '.repeat(Math.floor(j)), '*'.repeat(i))   
}
// малюємо верхню частину ромба
let space = number - 1;
for (let i = 1; i <= number / 2; i++) {
    let row = "";
    for (let j = 1; j <= space; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
    space--;
}
// малюємо нижню частину ромба
for (let i = Math.floor(number/2) + 1 ; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= space; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1 ; k++) {
        row += "*";
    }
    console.log(row);
    space++;
}