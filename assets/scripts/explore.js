// explore.js

window.addEventListener('DOMContentLoaded', init);
const voices = window.speechSynthesis;

/*function init() {
  // TODO
  const talkButton = document.querySelector('button');
  const words = document.getElementById('text-to-speak');
  const voiceList = document.getElementById('voice-select');
  const talk = new SpeechSynthesisUtterance(words.value);
  //let smile = document.querySelector(‘img’);
  let ttsVoices;
  setTimeout(() => {
    ttsVoices = voices.getVoices();
    talk.voice = ttsVoices[0];
    ttsVoices.forEach((voice, i) => voiceList.options[i] = new Option(voice.name, i));
  }, 100);
  talkButton.addEventListener('click', () =>
  {
    const talk = new SpeechSynthesisUtterance(words.value);
    document.querySelector('img').src = 'assets/images/smiling-open.png';
    talk.voice = ttsVoices[document.getElementById('voice-select').value];
    console.log(document.getElementById('voice-select').value);
    speechSynthesis.speak(talk);
    for(var i = 0; i < 1; i++)
    {
      setInterval(function()
      {
        if(speechSynthesis.speaking == false)
        {
          document.querySelector('img').src = 'assets/images/smiling.png';
        }
      }, 1);
      break;
    }
  })
}*/
function init() {
  const talkButton = document.querySelector('button');
  const words = document.getElementById('text-to-speak');
  const voiceList = document.getElementById('voice-select');
  //const talk = new SpeechSynthesisUtterance(words.value);
  //let smile = document.querySelector('img');
  let ttsVoices;
  setTimeout(() => {
    ttsVoices = voices.getVoices();
    for(var i = 0; i < ttsVoices.length; i++)
    {
      voiceList.options[i] = new Option(ttsVoices[i].name, i);
    }
  }, 100);
  talkButton.addEventListener('click', () => 
  {
    const talk = new SpeechSynthesisUtterance(words.value);
    document.querySelector('img').src = 'assets/images/smiling-open.png';
    talk.voice = ttsVoices[document.getElementById('voice-select').value];
    console.log(document.getElementById('voice-select').value);
    speechSynthesis.speak(talk);
    for(var i = 0; i < 1; i++)
    {
      setInterval(function()
      {
        if(speechSynthesis.speaking == false)
        {
          document.querySelector('img').src = 'assets/images/smiling.png';
        }
      }, 1);
      break;
    }
  })
}
