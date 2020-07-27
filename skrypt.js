$(document).ready(function() {
//skrypt, który dodaje klasę avtiv na kliknięte li
    $("ul.top-nav li").on("click", function() {
        if($(this).hasClass("activ")) {}
        else {
            $("ul.top-nav li").removeClass("activ");
            $(this).addClass("activ");
        }
    });

 // skrypt, który pokazuje/ukrywa  mmenu mobilne
    $("nav.mobile-nav h1.mobile1").on("click", function() {
        console.log("ok");
        $("nav.mobile-nav ul.mobile").toggle();
    }); 
    
});