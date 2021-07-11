// SCROLL
$(document).ready(function (){
    
    $("#page_top").click(function (){
        $('html, body').animate({
            scrollTop: $("#Top").offset().top-100
        }, 2000);
    });

    $("#page_services").click(function (){
        $('html, body').animate({
            scrollTop: $("#Page_Services").offset().top
        }, 2000);
    });

    $("#page_pricing").click(function (){
        $('html, body').animate({
            scrollTop: $("#Page_Pricing").offset().top
        }, 2000);
    });

    $("#page_contact").click(function (){
        $('html, body').animate({
            scrollTop: $("#Page_Contact").offset().top
        }, 2000);
    });

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("page_top").style.display = "block";
        } else {
          document.getElementById("page_top").style.display = "none";
        }
      }

    window.onscroll = function() {scrollFunction()};

    var Timer;
    
    function MyTimer(){
        Timer = setTimeout(introBG, 3000);
    }

    function MyTimerStop(){
        clearTimeout(Timer);
    }

    MyTimer();

    function introBG(){
        if ($("#intro").attr("class") == "intro1") {
            $("#intro").removeClass("intro1");
            $("#intro").addClass("intro2");
            $("#img1").removeClass("selected");
            $("#img2").addClass("selected");
            $("#artline").animate({backgroundPositionX:"+285px"});
            MyTimer();
        }
        else if ($("#intro").attr("class") == "intro2") {
            $("#intro").removeClass("intro2");
            $("#intro").addClass("intro3");
            $("#img2").removeClass("selected");
            $("#img3").addClass("selected");
            $("#artline").animate({backgroundPositionX:"+570px"});
            MyTimer();
        }
        else if ($("#intro").attr("class") == "intro3") {
            $("#intro").removeClass("intro3");
            $("#intro").addClass("intro4");
            $("#img3").removeClass("selected");
            $("#img4").addClass("selected");
            $("#artline").animate({backgroundPositionX:"+855px"});
            MyTimer();
        }
        else if ($("#intro").attr("class") == "intro4") {
            $("#intro").removeClass("intro4");
            $("#intro").addClass("intro1");
            $("#img4").removeClass("selected");
            $("#img1").addClass("selected");
            $("#artline").animate({backgroundPositionX:"+1140px"});
            MyTimer();
        }
    };


    $("#img1").click(function(){
        MyTimerStop();
        $("#intro").removeClass("intro2");
        $("#intro").removeClass("intro3");
        $("#intro").removeClass("intro4");
        $("#intro").addClass("intro1");
        $("#img2").removeClass("selected");
        $("#img3").removeClass("selected");
        $("#img4").removeClass("selected");
        $("#img1").addClass("selected");
        $("#artline").animate({backgroundPositionX:"+285px"});
        MyTimer();
    });

    $("#img2").click(function(){
        MyTimerStop();
        $("#intro").removeClass("intro1");
        $("#intro").removeClass("intro3");
        $("#intro").removeClass("intro4");
        $("#intro").addClass("intro2");
        $("#img1").removeClass("selected");
        $("#img3").removeClass("selected");
        $("#img4").removeClass("selected");
        $("#img2").addClass("selected");
        $("#artline").animate({backgroundPositionX:"+570px"});
        MyTimer();
    });

    $("#img3").click(function(){
        MyTimerStop();
        $("#intro").removeClass("intro1");
        $("#intro").removeClass("intro2");
        $("#intro").removeClass("intro4");
        $("#intro").addClass("intro3");
        $("#img1").removeClass("selected");
        $("#img2").removeClass("selected");
        $("#img4").removeClass("selected");
        $("#img3").addClass("selected");
        $("#artline").animate({backgroundPositionX:"+855px"});
        MyTimer();
    });

    $("#img4").click(function(){
        MyTimerStop();
        $("#intro").removeClass("intro1");
        $("#intro").removeClass("intro2");
        $("#intro").removeClass("intro3");
        $("#intro").addClass("intro4");
        $("#img1").removeClass("selected");
        $("#img2").removeClass("selected");
        $("#img3").removeClass("selected");
        $("#img4").addClass("selected");
        $("#artline").animate({backgroundPositionX:"+1140px"});
        MyTimer();
    });

});


var p = [];
p = document.getElementsByClassName("usluge");
var i;

var mql = window.matchMedia("(max-width: 768px)");
if(mql.matches){
    for (i = 0; i < p.length; i++) {
        p[i].classList.add("col-6");
        p[i].classList.remove("col-md-3");
    } 
}
else{
    for (i = 0; i < p.length; i++) {
        p[i].classList.add("col-md-3");
        p[i].classList.remove("col-6");
    }
}
mql.addEventListener("change", (e)=>{
    if(e.matches){
        for (i = 0; i < p.length; i++) {
            p[i].classList.add("col-6");
            p[i].classList.remove("col-md-3");
        } 
    }
    else{
        for (i = 0; i < p.length; i++) {
            p[i].classList.add("col-md-3");
            p[i].classList.remove("col-6");
        }
    }
})