

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


/*---------------------------------- Scrolling position -------------------------------*/
/*-- bio science --*/
$('#bioCompAvailHeader').click(function(){
   $('#bioCompAvailContent').slideToggle(600);
   $('#archCompAvailContent').hide(600);
   $('#DHCompAvailContent').hide(600);
   $('#duhigStudyAvailContent').hide(600);
   $('#gattonAvailContent').hide(600);
   $('#gradEcoAvailContent').hide(600);
   $('#herstonAvailContent').hide(600);
   $('#lawAvailContent').hide(600);
   $(this).parents("body").animate({scrollTop:200}, 600);
});
/*-- arch --*/
$('#archCompAvailHeader').click(function(){
   $('#archCompAvailContent').slideToggle(600);
   $('#bioCompAvailContent').hide(600);
   $('#DHCompAvailContent').hide(600);
   $('#duhigStudyAvailContent').hide(600);
   $('#gattonAvailContent').hide(600);
   $('#gradEcoAvailContent').hide(600);
   $('#herstonAvailContent').hide(600);
   $('#lawAvailContent').hide(600);
   $(this).parents("body").animate({scrollTop:240}, 600);
});
/*-- DHEngScience --*/
$('#DHCompAvailHeader').click(function(){
   $('#DHCompAvailContent').slideToggle(600);
   $('#bioCompAvailContent').hide(600);
   $('#archCompAvailContent').hide(600);
   $('#duhigStudyAvailContent').hide(600);
   $('#gattonAvailContent').hide(600);
   $('#gradEcoAvailContent').hide(600);
   $('#herstonAvailContent').hide(600);
   $('#lawAvailContent').hide(600);
   $(this).parents("body").animate({scrollTop:285}, 600);
});
/*-- Duhig study --*/
$('#duhigStudyCompAvailHeader').click(function(){
   $('#duhigStudyAvailContent').slideToggle(600);
   $('#bioCompAvailContent').hide(600);
   $('#archCompAvailContent').hide(600);
   $('#DHCompAvailContent').hide(600);
   $('#gattonAvailContent').hide(600);
   $('#gradEcoAvailContent').hide(600);
   $('#herstonAvailContent').hide(600);
   $('#lawAvailContent').hide(600);
   $(this).parents("body").animate({scrollTop:330}, 600);
});
/*-- Gatton --*/
$('#gattonCompAvailHeader').click(function(){
   $('#gattonAvailContent').slideToggle(600);
   $('#bioCompAvailContent').hide(600);
   $('#archCompAvailContent').hide(600);
   $('#DHCompAvailContent').hide(600);
   $('#duhigStudyAvailContent').hide(600);
   $('#gradEcoAvailContent').hide(600);
   $('#herstonAvailContent').hide(600);
   $('#lawAvailContent').hide(600);
   $(this).parents("body").animate({scrollTop:375}, 600);
});
/*-- GradeEcoBus --*/
$('#gradeEcoCompAvailHeader').click(function(){
   $('#gradEcoAvailContent').slideToggle(600);
   $('#bioCompAvailContent').hide(600);
   $('#archCompAvailContent').hide(600);
   $('#DHCompAvailContent').hide(600);
   $('#duhigStudyAvailContent').hide(600);
   $('#gattonAvailContent').hide(600);
   $('#herstonAvailContent').hide(600);
   $('#lawAvailContent').hide(600);
   $(this).parents("body").animate({scrollTop:425}, 600);
});
/*-- Herston --*/
$('#herstonCompAvailHeader').click(function(){
   $('#herstonAvailContent').slideToggle(600);
   $('#bioCompAvailContent').hide(600);
   $('#archCompAvailContent').hide(600);
   $('#DHCompAvailContent').hide(600);
   $('#duhigStudyAvailContent').hide(600);
   $('#gattonAvailContent').hide(600);
   $('#gradEcoAvailContent').hide(600);
   $('#lawAvailContent').hide(600);
   $(this).parents("body").animate({scrollTop:470}, 600);
});
/*-- Law Library --*/
$('#lawCompAvailHeader').click(function(){
   $('#lawAvailContent').slideToggle(600);
   $('#bioCompAvailContent').hide(600);
   $('#archCompAvailContent').hide(600);
   $('#DHCompAvailContent').hide(600);
   $('#duhigStudyAvailContent').hide(600);
   $('#gattonAvailContent').hide(600);
   $('#gradEcoAvailContent').hide(600);
   $('#herstonAvailContent').hide(600);
   $(this).parents("body").animate({scrollTop:515}, 600);
});




/*----------------------- Scrolling position --------------------------*/
/*--
var archclicks = 2;
var totalClicks = 2;

$('#computerAvailArch').click(function(){   
    archclicks += 1;
        totalClicks += 1;
     $("#computerAvailArch").click(function (e) { 
        $(this).parents("body").animate({scrollTop:20}, 800);
        
        
    });
 
})

$(function(){   
     $("#computerAvailEngSci").click(function (e) { 
     if (archclicks % 2 == 0){
        $(this).parents("body").animate({scrollTop:110}, 800);
    } else {
        $(this).parents("body").animate({scrollTop:545}, 800);
    }
        
    });
 
})
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






/*---------------------Graph ------------------------------*/
Chart.defaults.global.defaultFontColor= "white";
Chart.defaults.global.defaultFontSize= 10;
Chart.defaults.global.responsive = true;


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:30","11:00","12:00","12:30","13:00","13:30"],
        datasets: [{
            label: "Trend for all Libraries",
            fill: false,
            fillColor: "black",
            lineTension: 0,
            backgroundColor: "#fff",
            borderColor: "#fff",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#fff",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 0.1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [5, 5, 20, 25, 59, 59, 45, 59, 50, 51, 30, 25,],
            spanGaps: false,
            borderWidth: 2,


        }]
    },
    options: {

        scales: {
            xAxes: [{
                ticks: {
                     autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90
                },
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                display: false,
                ticks: {
                    beginAtZero:true,
                    max: 60
                }
            }]
        }
    }
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
