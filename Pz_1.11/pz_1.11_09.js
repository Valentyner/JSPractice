let array = [1, 2, 3, 4, 5, 6, 7];

function reverseAndUpToTwho(array){
    array.reverse();
    for(let i = 0; i < array.length; i++) {
        array[i] *= array[i];
    };
    return array;
};

console.log(reverseAndUpToTwho(array));
