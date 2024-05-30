$(document).ready(function() {
    $('#autoWidth').lightSlider({ 
        autoWidth: true,
        loop: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cs-hidden'); 
        } 
    });
    
    $('#bagAutoWidth').lightSlider({ 
        autoWidth: true,
        loop: true,
        onSliderLoad: function() {
            $('#bagAutoWidth').removeClass('cs-hidden'); 
        } 
    });
    $('#othersAutoWidth').lightSlider({ 
        autoWidth: true,
        loop: true,
        onSliderLoad: function() {
            $('#othersAutoWidth').removeClass('cs-hidden'); 
        } 
    });
});