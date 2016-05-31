$( document ).ready(function() {

$( "#jodie" ).hide();

$("#next").click(function(){
	$( "#talkbox" ).hide();
	$( "#wible" ).hide();
	$( "#exploreBody" ).css("backgroundImage","url(img/back3.png)");
	$("#jodie").show();
    $('#bulletleft').hide();
    $('#bulletright').hide();





$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $("#jodie").stop().animate({
            left: '-=75'
        }); //left arrow key
        break;
   
    case 39:
        $("#jodie").stop().animate({
            left: '+=75'
        }); //right arrow key
        break;

         case 32:
        $('#bulletright').show();
        $('#bulletleft').show();
        $('#bulletleft').animate({
            left: '-=1000'
        });
        $('#bulletright').animate({
            right: '-=1000'
        });
        break;
    
    }
})



});






});







