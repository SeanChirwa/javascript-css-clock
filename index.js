const secondHand = document.querySelector('.seconds-hand');
const minuteHand = document.querySelector('.minutes-hand');
const hourHand = document.querySelector('.hours-hand');
function setDate () {
   const now = new Date();

   const seconds = now.getSeconds();
   const secondDegrees = ((seconds / 60) * 360) + 90 ;
   secondHand.style.transform = `rotate(${secondDegrees}deg)`;
   console.log(seconds);

   const minutes = now.getMinutes();
   const minuteDegrees = ((minutes/60) * 360) + ((seconds/60)*6) + 90;
   minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
   console.log(minutes);

   const hours = now.getHours();
   const hourDegrees = ((hours/12) * 360) + ((minutes/60)*30)+ 90;
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
   console.log(hours);
}

setInterval(setDate,1000);