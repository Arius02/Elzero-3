let barParent = document.querySelector(".skills")
let progessBar = document.querySelectorAll(".inner-progress-div")
let stats = document.querySelector(".stats")
let num = document.querySelectorAll(".stats h4")
ScrollOut({
  targets: [".skills" , ".stats"]
});

window.addEventListener("scroll", function(){
  if(barParent.dataset.scroll == "in"){
    progessBar.forEach(el => {
      let wid = el.getAttribute("aria-value")
      el.style.width = wid + "%"
      let counter = el.parentElement.parentElement.querySelector("span .count")
      let timer = setInterval(() =>{
        if (Number(counter.textContent) < wid){
        counter.textContent = Number(counter.textContent) +1 
      } else {
        clearInterval(timer)
      } 
      } 
      , 300)
})
  } else{
    progessBar.forEach(el => {
      el.style.width = 0
      counter = el.parentElement.parentElement.querySelector("span .count").textContent = "0"
    });
  }
  if(stats.dataset.scroll == "in"){
    num.forEach(el => {
      let value = el.getAttribute("data-aria-value")
      let count = setInterval(() => {
        if (Number(el.textContent) < Number(value)) {
          el.textContent = Number(el.textContent) + 1
        } else {
          clearInterval(count)
        }
      }
        , 30)
  })} else {
    num.forEach(el => {
      el.textContent = "0"
    })
  } 
   
})

function makeTimer() {

  let endTime = new Date("21 october 2023 00:00:00 GMT+02:00");
  endTime = (Date.parse(endTime) / 1000);

  let now = new Date();
  now = (Date.parse(now) / 1000);

  let timeLeft = endTime - now;

  let days = Math.floor(timeLeft / 86400);
  let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
  let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

  if (hours < "10") { hours = "0" + hours; }
  if (minutes < "10") { minutes = "0" + minutes; }
  if (seconds < "10") { seconds = "0" + seconds; }

  $("#days").html(days);
  $("#hours").html(hours );
  $("#minutes").html(minutes);
  $("#seconds").html(seconds );
}
setInterval(function () { makeTimer(); }, 1000);