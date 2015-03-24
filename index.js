
var Clicked = false;

var devClicked = false;
var philClicked = false;

//when you hover over the developer side
$("#devBox, #developer, #matt, #devContent").mouseover(function() {
    $("#devBox").css("background-color","#557371");
}).mouseout(function() {
    $("#devBox").css("background-color","#3E5E5B");
});

//when you hover over the philosopher side
$("#philBox, #philosopher, #byrd, #philContent").mouseover(function() {
    $("#philBox").css("background-color","#606A7D");
}).mouseout(function() {
    $("#philBox").css("background-color","#465166");
});

//when you click the developer side
$("#devBox, #developer, #matt, #devContent").click(function(){
    if (philClicked) {
        $("#devBox").animate({
            width: "450px"
        }, 1000);
        $("#middleBar").animate({
            marginLeft: "445px"
        }, 1000);
        $("#developer").delay(700).fadeIn("slow");
        $("#philosopher").animate({
            marginTop: "215px"
        }, 500);
        //name movement
        $("#matt").delay(500).animate({
            marginLeft: "310px"
        }, 500);
        $("#byrd").delay(500).animate({
            marginLeft: "470px"
        }, 500);
        $("#papers").fadeOut();
        $("#teaching").fadeOut();
        $("#dphil").fadeOut();
        philClicked = false;
    }
    else if (devClicked) {
        $("#devBox").animate({
            width: "450px"
        }, 1000);
        $("#middleBar").animate({
            marginLeft: "445px"
        }, 1000);
        $("#philosopher").delay(700).fadeIn("slow");
        $("#developer").animate({
            marginTop: "215px"
        }, 500);
        //name movement
        $("#matt").delay(500).animate({
            marginLeft: "310px"
        }, 500);
        $("#byrd").delay(500).animate({
            marginLeft: "470px"
        }, 500);
        $("#skills").fadeOut();
        $("#projects").fadeOut();
        $("#courses").fadeOut();
        devClicked = false;
    } else {
        $("#devBox").animate({
            width: "825px"
        }, 1000);
        $("#middleBar").animate({
            marginLeft: "820px"
        }, 1000);
        $("#developer").animate({
            marginTop: "20px"
        }, 500);
        ///name movement
        $("#matt").delay(500).animate({
            marginLeft: "540px"
        }, 500);
        $("#byrd").delay(500).animate({
            marginLeft: "680px"
        }, 500);
        $("#philosopher").fadeOut();
        $("#skills").delay(250).fadeIn(500);
        $("#projects").delay(500).fadeIn(500);
        $("#courses").delay(750).fadeIn(500);
        devClicked = true;
    };
});

// when you click the philosopher side
$("#philBox, #philosopher, #byrd, #philContent").click(function(){
    if (devClicked) {
        $("#devBox").animate({
            width: "450px"
        }, 1000);
        $("#middleBar").animate({
            marginLeft: "445px"
        }, 1000);
        $("#philosopher").delay(700).fadeIn("slow");
        $("#developer").delay(700).animate({
            marginTop: "215px"
        }, 500);
        //name movement
        $("#matt").delay(500).animate({
            marginLeft: "310px"
        }, 500);
        $("#byrd").delay(500).animate({
            marginLeft: "470px"
        }, 500);
        $("#skills").fadeOut();
        $("#projects").fadeOut();
        $("#courses").fadeOut();
        devClicked = false;
    }
    else if (philClicked) {
        $("#devBox").animate({
            width: "450px"
        }, 1000);
        $("#middleBar").animate({
            marginLeft: "445px"
        }, 1000);
        $("#developer").delay(700).fadeIn("slow");
        $("#philosopher").animate({
            marginTop: "215px"
        }, 500);
        //name movement
        $("#matt").delay(500).animate({
            marginLeft: "310px"
        }, 500);
        $("#byrd").delay(500).animate({
            marginLeft: "470px"
        }, 500);
        $("#papers").fadeOut();
        $("#teaching").fadeOut();
        $("#dphil").fadeOut();
        philClicked = false;
    } else {
        $("#devBox").animate({
            width: "75px"
        }, 1000);
        $("#middleBar").animate({
            marginLeft: "70px"
        }, 1000);
        $("#philosopher").animate({
            marginTop: "20px"
        }, 500);
        //name movement
        $("#matt").delay(500).animate({
            marginLeft: "100px"
        }, 500);
        $("#byrd").delay(500).animate({
            marginLeft: "240px"
        }, 500);
        $("#developer").fadeOut();
        $("#papers").delay(750).fadeIn(500);
        $("#teaching").delay(1000).fadeIn(500);
        $("#dphil").delay(1000).fadeIn(500);
        philClicked = true;
    };
});

$("li").on("click", function(ev) {
    ev.stopPropagation();
});

var username = "matthew.james.byrd";
var domain = "gmail.com";

$("#insertEmail").html(username+"@"+domain);