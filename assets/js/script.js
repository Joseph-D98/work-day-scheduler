var todoInput = document.querySelectorAll(".todo-text");
var btn = document.querySelectorAll(".btn");

//Load jQuery
$(document).ready(function () {

    // Show Date and Time in Header 
    $('#currentDay').append();

    function addDate() {
        $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm a'));
    } setInterval(addDate, 1000);

});


// Change the color scheme for the given hours of the day

var repeater;

function showcurrenttime() {
    //$('.crnttym').text(moment().format('MMMM Do YYYY, h:mm a'));
    $('.todoInput').each(function (i, el) {
        if ($(this).data('time') < moment().format('YYYYMMDDHHmm')) {
            $(this).parent().addClass('.past');
        };
        if ($(this).data('time') > moment().format('YYYYMMDDHHmm') && $(this).data('time') < moment().add('h', 1).format('YYYYMMDDHHmm')) {
            $(this).parent().addClass('.present');
        };
    });
    repeater = setTimeout(showcurrenttime);
}
showcurrenttime();