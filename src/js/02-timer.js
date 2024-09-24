
import flatpickr from 'flatpickr';
import flatpickr from 'flatpickr/dist/flatpickr.min.css';

import '../css/common.css';
import '../css/02-timer.css';


startButton = document.querySelector("[data-start]");


startButton.addEventListener('click', function() {
  const selectedDate = new Date(document.getElementById("datetime-picker").value); 
  const currentDate = new Date();
 

  if(selectedDate < currentDate) {
    window.alert("Please choose a date in the future");
  }
});



startButton.addEventListener("click", function(){
  let countDownDate = new Date(document.getElementById("datetime-picker").value).getTime();
  
  let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector("[data-days]").innerText = days.toString().padStart(2, "0");
    document.querySelector("[data-hours]").innerText = hours.toString().padStart(2, "0");
    document.querySelector("[data-minutes]").innerText = minutes.toString().padStart(2, "0");
    document.querySelector("[data-seconds]").innerText = seconds.toString().padStart(2, "0");

    if(distance < 0){
      clearInterval(x);
      document.querySelector("[data-days]").innerText = "00";
      document.querySelector("[data-hours]").innerText = "00";
      document.querySelector("[data-minutes]").innerText = "00";
      document.querySelector("[data-seconds]").innerText = "00";
    }
  }, 1000);
  
  startButton.disabled = true; 
});