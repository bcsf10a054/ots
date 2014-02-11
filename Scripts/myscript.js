
$(document).ready(function () {



    $('#b1').click(function () {

        var userName = $('#username').val();

       // alert("hell");
        $.getJSON("/home/CheckUserName?username=" + userName, function (data) {

            if (!data) {
                alert("User already exists in database");

            }
            else {
                alert("User Name is available");
            }
        });

    });

});