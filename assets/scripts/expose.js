// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  const hornFrame = document.querySelector("img[alt='No image selected']");
  const hornSound = document.querySelector("audio.hidden");
  const volIcon = document.querySelector("img[alt='Volume level 2']");
  const jsConfetti = new JSConfetti();

  const dropdown = document.getElementById("horn-select");
  dropdown.addEventListener('change', function() 
  {
    //alert(this.value);
    hornFrame.src = `./assets/images/${this.value}.svg`;
    hornSound.src = `./assets/audio/${this.value}.mp3`;
  });

  const play = document.querySelector("button");
  play.addEventListener('click', function()
  {
    if(dropdown.value === 'party-horn')
    {
      jsConfetti.addConfetti();
    }
   
    hornSound.play();
  });

  const slider = document.querySelector("input[name='volume']");
  slider.addEventListener('input', function()
  {
    //console.log(this.value);
    let vol = this.value;
    if(vol == 0)
    {
      volIcon.src = "/assets/icons/volume-level-0.svg";
      hornSound.volume = vol/100;
    }
    else if(vol > 0 && vol < 33)
    {
      volIcon.src = "/assets/icons/volume-level-1.svg";
      hornSound.volume = vol/100;
    }
    else if(vol > 32 && vol < 67)
    {
      volIcon.src = "/assets/icons/volume-level-2.svg";
      hornSound.volume = vol/100;
    }
    else
    {
      volIcon.src = "/assets/icons/volume-level-3.svg";
      hornSound.volume = vol/100;
    }
  });
}