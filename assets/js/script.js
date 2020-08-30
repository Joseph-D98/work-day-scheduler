// variables
var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH"); // Variable for current hour 
var currentHourInt = parseInt(currentHour); // Parse it so that hour returns as an integer

// add data attributes for each hour to color to each row for current time
$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

// start jQuery 
$(document).ready(function () {

    // function to set data in local storage 
    renderPlans();

    // add date and time to header 
    $('#currentDay').append();

    function addDate() {
        $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm a'));

    } setInterval(addDate, 1000);

    // change row color to reflect the current hour 
    for (var i = 0; i <= 12; i++) {  

    var inputHour = $("#" + i + "Row").attr("data-time"); // row hour variable
    var inputHourInt = parseInt(inputHour); // parse hour to return integer

    if (currentHourInt === inputHourInt) {
      $("#" + i + "Row").addClass("present"); // applies red color if within the present hour 
    }
    if (currentHourInt > inputHourInt) { // applies grey color if hour is in the past
      $("#" + i + "Row").addClass("past");
    }
    if (currentHourInt < inputHourInt) { // applies green color if hour is in the future 
      $("#" + i + "Row").addClass("future");
    }  
  }

    // on click function to set data in local storage
    saveBtn.on("click", function () {

        var rowHour = $(this).attr("data-hour"); // row hour variable
        var input = $("#" + rowHour + "Row").val(); // saves text input
        localStorage.setItem(rowHour, input); //sets in local storaage
    });

    //  function to get data from local storage 
    function renderPlans() {
        for (var i = 0; i <= 12; i++) {
            $("#" + i + "Row").val(localStorage.getItem(i));
        }
    }
});
