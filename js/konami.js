"use strict";

let cheat = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
let arr = [];

$(document).keyup(function(event){
    console.log(event.keyCode);

    let runIT = event.keyCode
    arr.push(runIT)
    if (arr.length === cheat.length) {
        checkCheat()
    }
});

function checkCheat() {
    if (JSON.stringify(cheat) === JSON.stringify(arr)) {
        alert('30 Lives have been added')
    }
}

