let numb = 10000
let result = 0
let counter = 0
do{
    result = numb / 2
    numb = result
    counter++
}while(result > 50)

console.log(`Кількість виконаних операцій ділення:${counter}`)
console.log(`Кінцеве число: ${result}`)