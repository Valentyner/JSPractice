let width = 12;
let height = 12;


function construktor(width, height) {
    let slash = '#';
    let dog = '@';
    let result = '';
    let row = true;
    let height1 = height;
    let width1 = width;
    let bottom = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for(let i = 0; i < width; i++) {
        if(width1 >= 100){
            result = width1 + '  ';
            width1--;
        } else if(width1 >= 10 ){
            result = width1 + '   ';
            width1--;
        } else if(width1 <= 10) {
            result = width1 + '    ';
            width1--;
        }
        for(let j = 0; j < height; j++) {
            if((j + row) % 2 === 0) {
                result += dog + ' ';
            } else {
                result += slash + ' ';
            }
        }
        console.log(result);
        result = '';
        row = !row;
    }

    if(height1 >= 100) {
        let result1 = '     ';
        for(let i = 0; i < height1; i++){
            result1 += bottom[i] + ' ';
        }
        console.log(result);
    } else if(height1 >= 10) {
        let result1 = '     ';
        for(let i = 0; i < height1; i++) {
            result1 += bottom[i] + ' ';
        }
        console.log(result1);
    } else {
        let result1 = '     ';
        for(let i = 0; i < height1; i++) {
            result1 += bottom[i] + ' ';
        }
        console.log(result1);
    }
};

construktor(width, height);
