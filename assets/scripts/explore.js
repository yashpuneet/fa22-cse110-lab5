// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voicesDropdown = document.getElementById("voice-select");
  const face = document.querySelector("img[alt='Smiling face']");

  const speaker = window.speechSynthesis;
  let voices = [];
  setTimeout(() => {
    voices = speaker.getVoices();
    for(let i = 0; i < voices.length; i++)
    {
      //console.log(voices[i].name);
      const option = document.createElement("option");
      option.textContent = voices[i].name;
      option.value = i;
      voicesDropdown.appendChild(option);
    }
  }, 100);


  const textCapture = document.getElementById("text-to-speak");

  let sentence = new SpeechSynthesisUtterance(textCapture.value);
  sentence.addEventListener('start', function()
  {
    face.src = './assets/images/smiling-open.png';
  });
  sentence.addEventListener('end', function()
  {
    face.src = './assets/images/smiling.png';
  });

  const speak = document.querySelector("button");
  speak.addEventListener('click', function()
  {
    sentence.text = (textCapture.value);
    sentence.voice = voices[voicesDropdown.value];
    speaker.speak(sentence);
  });

}