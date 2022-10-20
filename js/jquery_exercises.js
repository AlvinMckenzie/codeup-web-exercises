"use strict";

// $(function that() {
//     alert ('page has loaded')
// });



//Selectors EX.

// $('li').css('font-size', '20px')
//
// $('h1, p, li').css('background-color', 'yellow')
//
// alert($('h1').html())

//Mouse Events EX.

$('h1').click(function (e) {
    $('h1').css('background-color', 'red')
})
$('p').dblclick(function (e) {
    $('p').css('font-size', "18px")
})
$('li').hover(function () {
        $('li').css('color', 'red')
    }, function () {
        $('li').css('color', 'black')
    }
)