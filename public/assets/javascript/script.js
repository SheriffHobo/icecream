$(function() {

$("#icbutns").on("click", "button", function() {
    // console.log(this); 
    var icecreamID = $(this).attr("flavor");
    $.ajax({
        url: `/api/icecreams/${icecreamID}`,
        type: "POST"
    }).then(function(res) {
        console.log(res);
    })
    event.preventDefault();
})
});