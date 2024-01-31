const audio = document.getElementById("my-audio");
const soundOn = document.getElementById("sound-on");
const soundOff = document.getElementById("sound-off");

function play() {
  audio.play();
}
function pause() {
  audio.pause();
  audio.currentTime = 0;
}

soundOn.addEventListener("click", () => {
  soundOff.style.display = "inline-block";
  soundOn.style.display = "none";
  pause();
});
soundOff.addEventListener("click", () => {
  soundOn.style.display = "inline-block";
  soundOff.style.display = "none";
  play();
});
