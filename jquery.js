$(document).ready(function(){

Events();

});

function Events(){
    $('.sgn-button').click(function(){
        alert("sign in succeded");
    })

    $('.cancel-button').click(function(){
        alert("sign in cancelled");
    })

    $('.login-button').click(function(){
        alert("log in succeded");
    })

    $('.sgn-button').click(function(){
        var email=$('#email').val()
        alert(email)
    })

    $('#email').change(function(){
        alert($(this).val())
    });

    $('#sex').change(function(){
        alert($('#sex').val())
    });
}
