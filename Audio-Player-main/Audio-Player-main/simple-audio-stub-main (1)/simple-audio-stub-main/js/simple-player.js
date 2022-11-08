console.log("hello-world!")
const currentTime = document.getElementById('current-time');
const totalTime = document.getElementById('total-time');
const playPauseButton = document.getElementById('play-pause-button');

const track1button = document.getElementById('track1button')



const seekBar = document.getElementById('seek-bar');
const audio = new Audio("audio/Soft-Background-for-Interview.webm");
let isSeeking = false; 





track1button.onclick=function (){
    audio.src= "audio....blblblblblb"
}



playPauseButton.onclick = function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

//AUDIO LISTENERS
//event triggered once audio loaded

audio.oncanplaythrough = function () {
    seekBar.disabled = false;
}

// event triggered when audio plays
audio.onplay = function () {
    playPauseButton.src = "images/ap-pause.png";
}


//event triggered when audio unpaused
audio.onpause = function(){
    playPauseButton.src = "images/ap-play-button.png";
}
//event triggered on meta data load
audio.onloadedmetadata = function(){
    totalTime.innerHTML = formatTime (audio.duration);
    currentTime.innerHTML = formatTime (0);
    seekBar.max = Math.floor(audio.duration);
}

//event triggered when time updates

audio.ontimeupdate = function(){
    currentTime.innerHTML = formatTime(audio.currentTime)
    if (!isSeeking){
        seekBar.value = Math.floor(audio.currentTime)
    }

}
//seek bar listeners

seekBar.oninout = function(){
    isSeeking = true;
}

// event triggered when seekbar is manually changed manually
seekBar.onchange = function(){
    audio.currentTime = seekBar.value;
    isSeeking = false;
}

//event triggered when audio ends
audio.onended = function(){
    currentTime.innerHTML = formatTime(0);
    seekBar.value = 0
    playPauseButton.src = "images/ap-play-button.png";
}

// UTILITY FUNCTIONS
// takes total seconds (number) and returns a formatted string 
function formatTime(secs) {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor((secs - (hours * 3600)) / 60);
    let seconds = Math.floor((secs - (hours * 3600)) - minutes * 60);
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (hours > 0) {
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return hours + ":" + minutes + ":" + seconds;
    } else {
        return minutes + ":" + seconds;
    }
}



// three buttons - unique id
//java reference for each one - element id
// set up on click listener
// audio.src= audio clip
