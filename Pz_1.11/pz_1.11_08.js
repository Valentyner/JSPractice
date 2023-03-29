let array = [12, 32, 234, 124, 54, 23, 455];

function averageValue(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i ++){
        sum += array[i]
    };
    let average = sum / array.length;
    return average;
};

console.log(averageValue(array));
