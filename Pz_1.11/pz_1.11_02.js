const arr1 = [1, 1, 2]
const arr2 = [17, 17, 3, 17, 17, 17, 17, 17]
const arr3 = [144, 165, 144, 144, 144, 144, 144, 144]

const outOfArr = (arr) => {
    let prev = arr[0]
    let prev2 = arr[1]
    if(prev == prev2) {
        for(let i = 2; i < arr.length; i++) {
            if(prev != arr[i]) {
                return arr[i]
            }
        }
    }
    if(prev != arr[2]) {
        return prev
    }
    if(prev2 != arr[2]) {
        return prev2
    }
}
console.log(outOfArr(arr1))
console.log(outOfArr(arr2))
console.log(outOfArr(arr3))