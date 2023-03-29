// function removeDuplicate(array) {
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             if(array[i] === array[j+1]){
//                 array.pop[j]
//                 j--
//             }else {
//                 continue;
//             }
//         }
//     }
//     return array
// }

function removeDuplicate(array) {
    let results = []
    array.forEach(function(value) {
        if(results.indexOf(value) === -1){
            results.push(value)
        }
    })

    return results
}

// function removeDuplicate(array) {
//     let result = []
//     for(let i = 0; i < array.length; i++) {
//         for(let j = 0; j <= result.length; j++){
//             if(array[i] !== result[j]){
//                 result.push(array[i]);
//             }
//             break;
//         }
//     }

//     return result
// }

console.log(removeDuplicate([1, 1, 1, 2, 3, 3, 4, 5, 5, 6]))
