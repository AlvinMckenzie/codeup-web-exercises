"use strict";


// $('li').css('font-size', '20px')
//
// $('h1, p, li').css('background-color', 'yellow')
//
// alert($('h1').html())

$(document).ready(function() {

    $('h1').click(function(e) {
        $(e.target).css('background', 'blue');
    });

    $('p').dblclick(function(e) {
        $(e.target).css('font-size', '18px');
    });

    $('li').hover(function(e) {
        $(e.target).css('color', 'green');
    }, function(e) {
        $(e.target).css('color', 'black');
    });

});