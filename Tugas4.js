$(document).ready(() => {
    

    $('.data').on('mouseenter', event => {
        $('.data').css('color', 'black');

        $('.data').animate({
            fontSize: '100px'
        }, 200)
    });

    $('.data').on('mouseleave', event => {
        $('.data').css('color', 'white');
        $('.data').animate({
            fontSize: '50px'
        }, 200)

    }
    

);
    $("#caridata").on("keyup", function () {
        $("#iniTable tr").filter(function () {
            $(this).toggle($(this).text().indexOf($('#caridata').val()) >= 0)
        });
    });

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