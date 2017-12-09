$(document).ready(function() {
    console.log("running")
    $(".tile").hover(function() {
        $("h3", this).fadeOut();
        $("ul", this).delay(450).fadeIn();
    }, function() {
        $("ul", this).fadeOut();
        $("h3", this).delay(450).fadeIn();
    });
});