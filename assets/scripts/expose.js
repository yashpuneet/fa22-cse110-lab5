// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  const hornFrame = document.querySelector("img[alt='No image selected']");
  const hornSound = document.querySelector("audio.hidden");

  const dropdown = document.getElementById("horn-select");
  dropdown.addEventListener('change', function() 
  {
    //alert(this.value);
    hornFrame.src = `/assets/images/${this.value}.svg`;
    hornSound.src = `/assets/audio/${this.value}.mp3`;
  });

  const play = document.querySelector("button");
  play.addEventListener('click', function()
  {
    hornSound.play();
  });
}