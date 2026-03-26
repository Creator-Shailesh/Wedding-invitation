$(document).ready(function() {
    // Countdown timer
    var countdownDate = new Date('2026-03-26T10:05:09Z').getTime();

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#countdown').html(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ');

        if (distance < 0) {
            clearInterval(x);
            $('#countdown').html('Event Started!');
        }
    }, 1000);
    
    // Interactive features
    $('#rsvp-button').click(function() {
        alert('Thank you for your RSVP!');
    });

    // Smooth animations
    $('#scroll-button').click(function() {
        $('html, body').animate({
            scrollTop: $('#event-details').offset().top
        }, 1000);
    });
});
