//expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  let btn = document.querySelector('button');

  let volumeslider = document.getElementById('volume');
  volumeslider.addEventListener('input', function() {
  if(volumeslider.value == 0) {
    document.querySelector("#volume-controls img").src = "assets/icons/volume-level-0.svg";
  }
  else if(volumeslider.value >= 1 && volumeslider.value < 33) {
    document.querySelector("#volume-controls img").src = "assets/icons/volume-level-1.svg";
  }
  else if(volumeslider.value >= 33 && volumeslider.value < 67) {
    document.querySelector("#volume-controls img").src = "assets/icons/volume-level-2.svg";
  }
  else if(volumeslider.value >= 67) {
    document.querySelector("#volume-controls img").src = "assets/icons/volume-level-3.svg";
  }
  })

  btn.onclick = function() {
    Array.from(document.querySelector("#horn-select").options).forEach(function(value) {
      let option_value = value.value;
      let is_option_selected = value.selected;

      var volumeItself = document.getElementById('volume');

      if(option_value === 'air-horn' && is_option_selected === true) {
        let audio = new Audio("assets/audio/air-horn.mp3");
        let volumeslider = document.getElementById('volume');
        volumeslider.addEventListener('input', function() {
          audio.volume = volumeItself.value / 100;
        })
        audio.volume = volumeItself.value / 100;
        audio.play();
      }

      if(option_value === 'car-horn' && is_option_selected === true) {
        let audio = new Audio("assets/audio/car-horn.mp3");
        let volumeslider = document.getElementById('volume');
        volumeslider.addEventListener('input', function() {
          audio.volume = volumeItself.value / 100;
        })
        audio.volume = volumeItself.value / 100;
        audio.play();
      }

      if(option_value === 'party-horn' && is_option_selected === true) {
        if(volumeItself.value / 100 > 0) {
          jsConfetti.addConfetti({
            confettiRadius: 6,
            confettiNumber: 500,
          })
        }
        let audio = new Audio("assets/audio/party-horn.mp3");
        let volumeslider = document.getElementById('volume');
        volumeslider.addEventListener('input', function() {
          audio.volume = volumeItself.value / 100;
        })
        audio.volume = volumeItself.value / 100;
        audio.play();
      }
    });
  }

  let list = document.getElementById('horn-select');
  list.onchange = function() {
    let val = document.getElementById('horn-select').value;
    if(val === 'air-horn') {
      document.querySelector('img').src = "assets/images/air-horn.svg";
    }
    else if(val === 'car-horn') {
      document.querySelector('img').src = "assets/images/car-horn.svg";
    }
    else if(val == 'party-horn') {
      document.querySelector('img').src = "assets/images/party-horn.svg";
    }
  }
}  
