let array = [[22, -1, 0, 43, 57],      
            [-33, 10, 5, 4, 8],        
            [3, -1, -44, 44, 87], 
            [4, -331, 0, 18, 4],      
            [6, -31, 9, 77, 4]];

function arr(array){
    for(let i = 0; i < array.length; i++) {
        array[i][i] <= 0 ? array[i][i] = 0 : array[i][i] = 1;
    }
    return array
    // array[i][i] = array[i][i] <= 0 ? 0 : 1;
}

console.log(arr(array))
    