'use strict'

function showMultiplicationTable(num){
    let multiplier = num;
    for (let i = 0; i <= 10; i++){
        let result = multiplier * i;
        console.log(multiplier + '*' + i + '=' + result);
    }
}

showMultiplicationTable(1)

showMultiplicationTable(2)

showMultiplicationTable(3)



