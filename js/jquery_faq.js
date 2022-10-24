"use strict";

$('dt').click(function (e) {
    $('dd').toggleClass('invisible');
    $('dd').removeClass('highlighted')
    $(this).next('dd').toggleClass('highlighted')
});

$('.factList').click(function () {
    $('h3').each(function(x, y) {
        $(y).next().children().last().css('background-color', 'yellow')
    })
})

$('h3').click(function () {
    $(this).next().children().css('font-weight', 'bold')
})

$('li').click(function () {
    $(this).parent().children().first().css('color', 'blue')

})

