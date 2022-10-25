$(document).ready(function() {
    $('#processing').hide()
    $('#title h4 span').hide()

    var clicked = false
    $("#title").click(function() {
        if (clicked) {
            $("#chat").animate({height: "40px",}, 500, function () { $("#title h4 span").hide()}).animate({width: "40px"}, 500)
            clicked = !clicked
        }
        else{
            $("#chat").animate( {}, 500, function () {
                $("#title h4 span").show()
            }).animate({height: "400px" }, 500)
        }
        clicked = !clicked
    })
})