let num = 10;
let counter = 0;
do{
    if (counter == 0){
        console.log(counter + ' - це нуль')
        counter++
    }else if (counter % 2 == 0){
        console.log(counter + ' - парне число')
        counter++
    }else {
        console.log(counter + ' - непарне число')
        counter++
    }

}while(counter <= num)