// grid Home
    $('#grid-home').mediaBoxes({
        boxesToLoadStart: 1,
        columns: 1,
        resolutions: [
                {
                    maxWidth: 1220,
                    columnWidth: 'auto',
                    columns: 1,
                },
                {
                    maxWidth: 900,
                    columnWidth: 'auto',
                    columns: 1,
                },
                {
                    maxWidth: 450,
                    columnWidth: 'auto',
                    columns: 1,
                },
            ],
    });
    
// grid Home 2
    $('#grid-home2').mediaBoxes({
        boxesToLoadStart: 10,
        columns: 1,
        resolutions: [
                {
                    maxWidth: 1220,
                    columnWidth: 'auto',
                    columns: 1,
                },
                {
                    maxWidth: 900,
                    columnWidth: 'auto',
                    columns: 1,
                },
                {
                    maxWidth: 450,
                    columnWidth: 'auto',
                    columns: 1,
                },
            ],
    });
    
// grid Activity
    $('#grid-activity').mediaBoxes({
        boxesToLoadStart: 7,
        boxesToLoad:5,
        columns: 1,
        filterContainer: '#filter',
        filter: 'button',
        resolutions: [
                {
                    maxWidth: 1220,
                    columnWidth: 'auto',
                    columns: 1,
                },
                {
                    maxWidth: 900,
                    columnWidth: 'auto',
                    columns: 1,
                },
                {
                    maxWidth: 450,
                    columnWidth: 'auto',
                    columns: 1,
                },
            ],
    });
    
    // grid 1 column
    $('#grid-1-1').mediaBoxes({
        boxesToLoadStart: 8,
        columns: 1,
        resolutions: [
                {
                    maxWidth: 1220,
                    columnWidth: 'auto',
                    columns: 1,
                },
                {
                    maxWidth: 900,
                    columnWidth: 'auto',
                    columns: 1,
                },
                {
                    maxWidth: 450,
                    columnWidth: 'auto',
                    columns: 1,
                },
            ],
    });
    
    // grid 2 columns
    $('#grid-1-2').mediaBoxes({
        boxesToLoadStart: 8,
        columns: 2,
        resolutions: [
                {
                    maxWidth: 1220,
                    columnWidth: 'auto',
                    columns: 2,
                },
                {
                    maxWidth: 900,
                    columnWidth: 'auto',
                    columns: 1,
                },
                {
                    maxWidth: 450,
                    columnWidth: 'auto',
                    columns: 1,
                },
            ],
    });
    
    
// Activity - sensor buttons -------------------------------------------

var $sensordef = $("#sensor-default");
var $sensorcust = $("#sensor-custom");
var $sensordefbut = $("#sensor-default-button");
var $sensorcustbut = $("#sensor-custom-button");
var $sensorclose = $("#sensor-close");

$sensorclose.click(function(){
    if ($sensordef.hasClass("uk-hidden")) {
    } else {
        $sensordef.addClass("uk-hidden");
        $sensordefbut.removeClass("uk-active");
    }
    if ($sensorcust.hasClass("uk-hidden")) {
    } else {
        $sensorcust.addClass("uk-hidden");
        $sensorcustbut.removeClass("uk-active");
        $sensorselect.prop("selectedIndex", -1);
        $customlinkexpand.slideUp();
    }
});

$sensordefbut.click(function(){

    if ($sensordefbut.hasClass("uk-active")) {
    }else {
        $sensordefbut.addClass("uk-active");
        $sensorcustbut.removeClass("uk-active");
        if ($sensordef.hasClass("uk-hidden")) {
            $sensorcust.addClass("uk-hidden");
            $sensordef.removeClass("uk-hidden");
        }
    };
    
});

$sensorcustbut.click(function(){
    if ($sensorcustbut.hasClass("uk-active")) {
    }else {
        $sensorcustbut.addClass("uk-active");
        $sensordefbut.removeClass("uk-active");
        if ($sensorcust.hasClass("uk-hidden")) {
            $sensordef.addClass("uk-hidden");
            $sensorcust.removeClass("uk-hidden");
        }
    };
    
});



var $sensorselect = $('#sensor-select');
var $customlinkexpand = $("#custom-link-expand");

$sensorselect.prop("selectedIndex", -1);

$sensorselect.change(function(){
    $customlinkexpand.slideDown('slow');
});

