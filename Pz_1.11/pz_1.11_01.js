const arr = (n) => {
    let arr1 = []
    let k = n
    for(let i = 0; i < k; i++) {
        arr1.push(n)
        --n
    }
    return arr1
}
console.log(arr(5))