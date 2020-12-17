$(function() {
    var display = $("#display-input");

    $(".digit-button").click(function () {
        var digit = $(this).val();
        display.val(function (_, current) {
            return current + digit;
        })
    });

    $(".evaluate-button").click(function() {
        display.val( eval( display.val() ) )
    });

    $(".clear-button").click(function() {
        display.val( '' )
    });

    var MEMORY = 0;
    var MEM_CLEAR = false; // on first click MEM->DISPLAY, on second click MEM<-0
    $(".mrc-button").click(function () {
        if ( ! MEM_CLEAR ) {
            display.val( MEMORY )
            MEM_CLEAR = true;
        } else {
            MEMORY = 0;
            MEM_CLEAR = false;
        }
    });

    $(".mem-plus-button").click(function () {
        MEMORY += eval(display.val());
        MEM_CLEAR = false;
    });

    $(".mem-minus-button").click(function () {
        MEMORY -= eval(display.val());
        MEM_CLEAR = false;
    });
});
