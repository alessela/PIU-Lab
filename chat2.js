$(document).ready(function () {
    $("#welcome").hide()
    $("#conversation").hide()

    $("#sendMessageButton").on("click", sendMessage)
    $("#globalLogout").on("click", globalLogout)
    $("#sendMessageButton").on("click", readMessages)

    $("#welcome 1").on("click", logout)

    $("#authenticate_button").click(function () {
        authenticate()
        return false
    })
})

function authenticate(){
    let usernameVal = $("#username").val()
    let passwordVal = $("#password").val()

    let data = {
        username: usernameVal,
        password: passwordVal
    }

    $.ajax({
        url: "https://cgisdev.utcluj.ro/moodle/chat-piu/authenticate.php",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        dataType: "json",
        beforeSend: function () {

        },
        success: function () {
            console.log("validate credentials SUCCESS")
            $("#chat_form").showChat()
        },
        error: function(xhr) {
            var message = "Generic error message"
            if (xhr.responseText) {
                message = $.parseJSON(xhr.responseText).message
            }
            console.log("validate credentials ERROR - ", message)
        },
        complete: function() {
            console.log("validate credentials COMPLETE")
        },
        statusCode: {
            401: function () {
                console.log("Please (re)authenticate");
            }
        }
        })
}

function logout(){

}

function globalLogout(){

}

function sendMessage() {

}

function readMessages() {

}

function showChat(condition) {
    if (condition) { // show chat
        $("#chat_form").fadeOut(
            500,
            function () {
                $("#welcome").fadeIn(500)
                $("#conversation").fadeIn(500)
            }
        )
    }else{ // hide chat
        $("#welcome").fadeOut(500)
        $("#conversation").fadeOut(
            500,
            function () {
                $("#chat_form").fadeIn(500)
            }
        )
    }
}