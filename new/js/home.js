

/*------------------------- change of html throught nav ------------------*/
$(document).ready(function(){

$('a[target]').click(function(e){
    e.preventDefault();
    $('iframe[name="showContent"]').prop('src', this.href).show();
});


/* drop down for the different libraries --*/
/*--
$(".header").click(function () {
    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(600, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
       
    });

});

--*/


/*------------------------- on NAV click -----------------------------*/
/*-- Home --*/
$('#navDesignHours').click(function() {
    $('#navDesignHours').css({
        'border-bottom': '2px solid white'
        
    });
    $('#navDesignComputers').css({
        'border-bottom': 'none'
        
    });
    $('#navDesignTraining').css({
        'border-bottom': 'none'
        
    });
    $('#navDesignWorkout').css({
        'border-bottom': 'none'
        
    });
});
/*-- Friends --*/
$('#navDesignComputers').click(function() {
    $('#navDesignComputers').css({
        'border-bottom': '2px solid white'
        
    });
    $('#navDesignHours').css({
        'border-bottom': 'none'
        
    });
    $('#navDesignTraining').css({
        'border-bottom': 'none'
        
    });
    $('#navDesignWorkout').css({
        'border-bottom': 'none'
        
    });
});
/*-- Challenge --*/
$('#navDesignTraining').click(function() {
    $('#navDesignTraining').css({
        'border-bottom': '2px solid white'
        
    });
    $('#navDesignHours').css({
        'border-bottom': 'none'
        
    });
    $('#navDesignComputers').css({
        'border-bottom': 'none'
        
    });
    $('#navDesignWorkout').css({
        'border-bottom': 'none'
        
    });
});

/*-- Workout --*/
$('#navDesignWorkout').click(function() {
    $('#navDesignWorkout').css({
        'border-bottom': '2px solid white'
        
    });
    $('#navDesignHours').css({
        'border-bottom': 'none'
        
    });
    $('#navDesignComputers').css({
        'border-bottom': 'none'
        
    });
    $('#navDesignTraining').css({
        'border-bottom': 'none'
        
    });
});
/*---------------------end of on NAV click ------------------------------*/

/*---------------------Click and computers avilable shows up ------------------------------*/


$("#box").click(function() {
     $("#image3").css('display','none');
     $("#image").css('display','block');
    });


$("#box2").click(function() {
     $("#image").css('display','none');
     $("#image3").css('display','block');
    });

$("#image").click(function() {
     $("#image").css('display','none');
    });

$("#image3").click(function() {
     $("#image3").css('display','none');
    });
/*---------------------Click zoom in zoom out ------------------------------*/

var imagesize = $('#image2').width();
    
    $('#box').on('click', function(){
        imagesize = imagesize - 175;
        $('#image2').width(imagesize).height(imagesize);
        $('#image2').css( { "margin-left" : "65px" } );
        $('#image').css( { "margin-top" : "192px" } )

    $('#image2').one('click', function(){
        imagesize = imagesize + 175;
        $('#image2').width(imagesize).height(imagesize);
        $('#image2').css( { "margin-left" : "-16px" } );
        $('#image').css( { "display" : "none" } );
        $('#image3').css( { "display" : "none" } );
        });
        
    });

    $('#box2').on('click', function(){
        imagesize = imagesize - 175;
        $('#image2').width(imagesize).height(imagesize);
        $('#image2').css( { "margin-left" : "65px" } );
        $('#image').css( { "margin-top" : "192px" } ); 
    $('#image2').one('click', function(){
        imagesize = imagesize + 175;
        $('#image2').width(imagesize).height(imagesize);
        $('#image2').css( { "margin-left" : "-16px" } );
        $('#image').css( { "display" : "none" } );
        $('#image3').css( { "display" : "none" } );
        });

    });

/*---------------------Working on slide effect ------------------------------*/
    $( "#box4" ).click(function() {
    $('#imagen').css( { "display" : "block" } );
    $( "#imagen" ).toggle( "slide" );
});

});


/*--------------------- Change image on hover ------------------------------*/


$(document).ready(function(){
    $("#bslAllfloorClick1").click(function(){
        $("#blsAllFloor").hide(800);
        $("#blsfloor1").hide();
        $("#blsfloor2").hide();
        $("#blsfloor3").show();

    });

    $("#bslAllfloorClick2").click(function(){
        $("#blsAllFloor").hide(800);
        $("#blsfloor1").hide();
        $("#blsfloor3").hide();
        $("#blsfloor2").show();
    });

    $("#bslAllfloorClick3").click(function(){
        $("#blsAllFloor").hide(800);
        $("#blsfloor2").hide();
        $("#blsfloor3").hide();
        $("#blsfloor1").show();
    });


    $(".backButton").click(function(){
        $("#bslFloor3Image").show();
        $("#bslAllfloorClick4").hide();
        $("#blsAllFloor").show(800);
        $("#blsfloor1").hide();
        $("#blsfloor2").hide();
        $("#blsfloor3").hide();
    });
});
