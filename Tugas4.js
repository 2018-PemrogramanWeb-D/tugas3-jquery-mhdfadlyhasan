$(document).ready(() => {

    $('.data').on('mouseenter', event => {
        $('.data').css('color', 'black');
    }
    );

    $('.data').on('mouseleave', event => {
        $('.data').css('color', 'white');
    }
);
    $('.image').on('click', event=>
    {$(event.currentTarget).hide();
    }).on('mouseenter', event => {
        $(event.currentTarget).addClass("imagezoom");
    });

    $('.image').on('mouseleave', event => {
        $(event.currentTarget).removeClass("imagezoom");
    });

    $('.task').on('click', event => {
        $('.image').show();
    });

})