// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voicesDropdown = document.getElementById("voice-select");
  
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

  const speak = document.querySelector("button");
  speak.addEventListener('click', function()
  {
    let sentence = new SpeechSynthesisUtterance(textCapture.value);
    sentence.voice = voices[voicesDropdown.value];
    speaker.speak(sentence);
  });

}