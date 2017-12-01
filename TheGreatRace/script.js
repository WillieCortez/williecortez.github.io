// script.js

$(function() {
     
    $("button").click(function() {
        $('#box').fadeOut(1000);
    });
    
    
    
    $('#box').click(function() {
        alert('you just clicked the box');
    });
    
    $("input").blur(function() {
        
        if( $(this).val() == "" ) {
            $(this).css('border','solid 1px red');
            $('#box').text('Forgot to add text?');
        }
        
    });
    
    $("input").keydown(function() {
        
        if( $(this).val() !== "" ) {
            $(this).css('border','solid 1px #777');
            $('#box').text('Thanks for that!');
        }
        
    });
    
    $('#box').hover(function() {
        
        $(this).text('you hovered in!');
        
    }, function() {
        
        $(this).text('you hovered out!');
        
    });
    
    
    
    
    // Click GO button
    $('#go').click(function() {
        
        
        // function checks if a car won
        function checkIfComplete() {
            
            if( isComplete == false ) {
                isComplete = true;
            } else {
                place = 'second';
            }
            
        }
        
        // get width of cars
        var carWidth = $('#car1').width();
        
        // get width of racetrack
        var raceTrackWidth = $(window).width() - carWidth;
        
        // generate random # between 1 and 5000
        
        var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
        var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );
        
        // flag variable to FALSE 
        var isComplete = false;
        
        // flag variable to FIRST
        var place = 'first';
        
        // animate car 1
        $('#car1').animate({
        
            // move the car width of racetrack
            left: raceTrackWidth
            
        }, raceTime1, function() {
            
                        
            // run function
            checkIfComplete();
            
            // text feedback in race info box
            $('#raceInfo1 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!' );
            
        });
        
        // animate car 2
        $('#car2').animate({
        
            // move the car width of track
            left: raceTrackWidth
            
        }, raceTime2, function() {
            
                        
            // run function
            checkIfComplete();
            
            // text feedback in race info box
            $('#raceInfo2 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!' );
            
        });
        
    });
    
    // reset race
    $('#reset').click(function() {
        $('.car').css('left','0');
        $('.raceInfo span').text('');
    });
    
    
    
    
    $('.notification-bar').delay(2000).slideDown().delay(3000).fadeOut();
    
     
    
    
    $('#box1').click(function() {
       $(this).fadeTo( 1000, 0.25, function() {
            // animation complete
           
           $(this).slideUp();
       }); 
    });
    
    $('div.hidden').slideDown();
    
    $('button').click(function() {
        $('#box1').slideToggle();
    });
    
    
    
    
    $('#left').click(function() {
        $('.box').animate({
            left: "-=40px",
            fontSize: "+=2px"
        }, function() {
            // animation complete
        });
    });
    
    $('#up').click(function() {
        $('.box').animate({
            top: "-=40px",
            opacity: "+=0.1"
        }, function() {
            // animation complete
        });
    });
    
    $('#right').click(function() {
        $('.box').animate({
            left: "+=40px",
            fontSize: "-=2px"
        }, function() {
            // animation complete
        });
    });
    
    $('#down').click(function() {
        $('.box').animate({
            top: "+=40px",
            opacity: "-=0.1"
        }, function() {
            // animation complete
        });
    });
    
    
    
    $('#circle2').css({
        'background':'#8a8d22',
        'display':'inline-block',
        'color':'white',
        'text-align':'center',
        'line-height':'140px',
        'height':'140px',
        'width':'140px'
    }).addClass('circleShape');
    
});
    





