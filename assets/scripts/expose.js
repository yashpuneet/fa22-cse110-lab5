// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  const hornFrame = document.querySelector("img[alt='No image selected']")

  const dropdown = document.getElementById("horn-select");
  dropdown.addEventListener('change', setHornByChoice);

  function setHornByChoice(choice)
  {
    hornFrame.src = "${choice.value}.svg";
  }
}