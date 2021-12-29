// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = hours+":" + 
//   + minutes+":" + seconds;
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
const demo = document.getElementById('demo'),
    hbd = document.getElementById('hbd')
var timeLeft =3;
    var elem = document.getElementById('demo');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        //   demo.remove();
        //   hbd.style.visibility="visible"

        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = "00:00:"+addZero(timeLeft) ;
        timeLeft--;
      }
    }
    function addZero(n) {
        return (parseInt(n,10) < 10 ? '0' : '') + n;
      }