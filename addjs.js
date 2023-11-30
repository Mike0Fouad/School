// buttons home
const wrapper = document.querySelector(".wrapper-holderhome");

const buttonmission = document.querySelector(".buttonm");
const buttonvision = document.querySelector(".buttonv");

const panimatedv = document.querySelector(".panimatedv");
const panimatedm = document.querySelector(".panimatedm");

buttonmission.addEventListener("click", function () {

  wrapper.classList.remove("homeanimation");

  panimatedv.classList.remove("homeanimationv");
  panimatedm.classList.remove("homeanimationm");
  panimatedm.classList.add("fadein");
  panimatedv.classList.add("fadeout");

  buttonmission.classList.remove("missionanimation");
  buttonvision.classList.remove("visionanimation");

  buttonmission.style.background = "radial-gradient(#23b499dd 10%,#2362b4dd)";
  buttonvision.style.background = "radial-gradient(#23a7a766 10%,#2362b444)";

  setTimeout(function() {
    panimatedm.style.opacity = "1";
    panimatedm.classList.remove("fadein");
}, 1000);
setTimeout(function() {
  panimatedv.style.opacity = "0";
  panimatedv.classList.remove("fadeout");
}, 500);
});

buttonvision.addEventListener("click", function () {

  wrapper.classList.remove("homeanimation");

  panimatedm.classList.remove("homeanimationm");
  panimatedv.classList.remove("homeanimationv");
  panimatedv.classList.add("fadein");
  panimatedm.classList.add("fadeout");

  buttonmission.classList.remove("missionanimation");
  buttonvision.classList.remove("visionanimation");

  buttonvision.style.background = "radial-gradient(#23b499dd 10%,#2362b4dd)";
  buttonmission.style.background = "radial-gradient(#23a7a766 10%,#2362b444)";

  setTimeout(function() {
    panimatedv.style.opacity = "1";
    panimatedv.classList.remove("fadein");
}, 1001);
setTimeout(function() {
  panimatedm.style.opacity = "0";
  panimatedm.classList.remove("fadeout");
}, 501);
});

//3D SLider
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let boxthoughts = document.querySelector('.boxthoughts');

let degrees = 0;

prev.addEventListener('click', function(){
    degrees += 45;
    boxthoughts.style = `transform:perspective(1000px) rotateY(${degrees}deg)`;
})
next.addEventListener('click', function(){
    degrees -= 45;
    boxthoughts.style = `transform:perspective(1000px) rotateY(${degrees}deg)`;
})