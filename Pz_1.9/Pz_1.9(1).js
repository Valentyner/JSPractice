let n = 100
for (let i = 1; i <= n; i++){
    let flag = 1;
    for (let j = 2; (j <= i/2) && (flag == 1); j += 1){
        if (i % j == 0){
            flag = 0
        }
    }
    if (flag == 1) {
        console.log(i);
    }
}