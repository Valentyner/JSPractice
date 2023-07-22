const arr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]
function simplify(arr) {
    let arr2 = arr.flat(Infinity).sort()
    return arr2
}
console.log(simplify(arr))