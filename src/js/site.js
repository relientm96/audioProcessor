// Main Site Javascript

var playState = 0;

var sineWave = new Pizzicato.Sound({
    source: 'wave',
    options: {
        frequency: 900
    }
});

$(document).ready(function() {
    $("#playBtn").click(function() {
        sineWave.stop();
        sineWave.play();
    });
    $("#stopBtn").click(function() {
        sineWave.stop();
    });
});

// Get Path of Music file to play
function getMusicFile() {


}