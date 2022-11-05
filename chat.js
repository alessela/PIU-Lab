$(document).ready(function() {
    $('#processing').hide()
    $('#title h4 span').hide()

    var clicked = false

    $("#title").click(function() {
        if (clicked) {
            $("#chat").animate({width: "50px"}, 500, function () { $("#title h4 span").hide()})
            .animate({height: "40px", }, 500, function () { $("#title h4 span").hide()})
            clicked = !clicked
        }
        else{
            $("#chat").animate( {width: "300px"}, 500, function () {$("#title h4 span").show()})
            .animate({height: "400px" }, 500, function () {$("#title h4 span").show()})
            clicked = !clicked
        }
    })

    
})