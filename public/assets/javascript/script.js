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
    location.reload();
});

$("#addIceCreamButton").on("click", function() {
    var iceCream = {
        name: $("#name").val()        
    }
    $.ajax({
        url: `/api/icecreams`,
        type: "POST",
        data: iceCream
    }).then(function(res) {
        console.log(res);
    })
    location.reload();
});

/*$("#iceaten").on("click", function() {
    var iceCream = {
        id: $(this).val()        
    }
    $.ajax({
        url: `/api/icecreams`,
        type: "DELETE",
        data: iceCream
    }).then(function(res) {
        console.log(res);
    })
    location.reload();
});*/
$('.icecreamDevoured').on("click", function() {
    /*var iceCream = {
        id: $(this).val()        
    }*/
    $.ajax({
        url: `/api/icecreams/${$(this).val()}`,
        type: "DELETE",
        //type: "POST",
        //data: iceCream
    }).done(function() {
        console.log('DONE');
        location.reload();
        //location.reload();
    }).fail(function(error){
        console.log(error);
    })

    return false;
});
});