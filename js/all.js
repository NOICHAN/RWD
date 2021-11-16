$(document).ready(function () {
    $('.showMenu').click(function (e) { 
        e.preventDefault();
        $('body').toggleClass('menuClose');
    });

    $('.fa-heart').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('fas');
    });

    $('.shoppingCart').click(function (e) { 
        e.preventDefault();
        $(this).addClass('active');
    });
});