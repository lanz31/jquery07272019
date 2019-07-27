$(document).ready(function () {
    $('#box1').fadeIn("slow");
    $('#box2').delay(300).fadeIn("slow");
    $('#box3').delay(500).fadeIn("slow");
    $('#box4').delay(700).fadeIn("slow");

    $('#uname').keyup(function () {
        let size = document.getElementById('uname').value.length;
        //console.log(size);
        if (size < 8) {
            $('.msg').text("Username must be 8 characters");
        }
        else {
            $('.msg').text("");
        }
    });
});