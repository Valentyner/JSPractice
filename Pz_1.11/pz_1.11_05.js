function analyzeNumber(num) {
    if (num > 0) {
      console.log(num + " є позитивним числом.");
    } else if (num < 0) {
      console.log(num + " є  негативним числом.");
    } else {
      console.log(num + " є нулем.");
    }

    let isPrime = true;
    if(num === 1) {
        isPrime = false;
    }else if(num > 1) {
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                isPrime = false;
                break;
            }
        }
    }

    if(isPrime){
        console.log(num + ' є простим числом')
    }else {
        console.log(num + '  не є простим числом')
    }

    let divOnTwo = num % 2;
    let divOnFive = num % 5;
    let divOnThree = num % 3;
    let divOnSix = num % 6;
    let divOnNine = num % 9;

    if(divOnTwo === 0){
        console.log(num + ' ділиться на 2 без остачі')
    }else {
        console.log(num + ' не  ділиться на 2 без остачі')
    }

    
    if(divOnFive === 0){
        console.log(num + ' ділиться на 5 без остачі')
    }else {
        console.log(num + ' не  ділиться на 5 без остачі')
    }

    
    if(divOnThree === 0){
        console.log(num + ' ділиться на 3 без остачі')
    }else {
        console.log(num + ' не  ділиться на 3 без остачі')
    }

    
    if(divOnSix === 0){
        console.log(num + ' ділиться на 6 без остачі')
    }else {
        console.log(num + ' не  ділиться на 6 без остачі')
    }

    
    if(divOnNine === 0){
        console.log(num + ' ділиться на 9 без остачі')
    }else {
        console.log(num + ' не  ділиться на 9 без остачі')
    }
}

analyzeNumber(17)
analyzeNumber(-3)
analyzeNumber(30)
