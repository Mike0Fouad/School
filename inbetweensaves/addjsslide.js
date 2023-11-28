//function visionplay() {
//  document.getElementsByClassName(".wrapper-holderhome").style.animationPlayState = "running";
//}
const wrapperhome = document.querySelector("wrapperhomeclick");
const wrapper = document.querySelector(".wrapper-holderhome");

const buttonmission = document.querySelector(".buttonm");
const buttonvision = document.querySelector(".buttonv");


buttonmission.addEventListener("click", function () {

  wrapper.classList.remove("homeanimation");
  wrapper.style.transform = "translateX(-100%)";

  buttonmission.classList.remove("missionanimation");
  buttonvision.classList.remove("visionanimation");

  buttonmission.style.background = "radial-gradient(#23b499dd 10%,#2362b4dd)";
  buttonvision.style.background = "radial-gradient(#23a7a766 10%,#2362b444)";
});

buttonvision.addEventListener("click", function () {

  wrapper.classList.remove("homeanimation");
  wrapper.style.transform = "translateX(0%)";m

  buttonvision.classList.remove("visionanimation");
  buttonmission.classList.remove("missionanimation");

  buttonvision.style.background = "radial-gradient(#23b499dd 10%,#2362b4dd)";
  buttonmission.style.background = "radial-gradient(#23a7a766 10%,#2362b444)";
});
/*
function vision() {
  document.querySelector(".wrapper-holderhome")
  document.querySelector(".wrapper-holderhome").style.transform = "translateX(0)";

  document.querySelector(".buttonm").classList.remove(".missionanimation");
  document.querySelector("buttonv").classList.remove(".visionanimation"); 


  document.querySelector(".fakepseudom").style.animationPlayState = "paused";
  document.querySelector(".fakepseudov").style.background = "radial-gradient(#23b499dd 10%,#2362b4dd)";
  document.querySelector(".fakepseudom").style.background = "radial-gradient(#23a7a766 10%,#2362b444)";
}
function mission() {
  document.querySelector(".wrapper-holderhome").style.animationPlayState = "paused";
  document.querySelector(".wrapper-holderhome").style.transform = "translateX(-100)";

  buttonmission.classList.remove(".missionanimation");
  buttonvision.classList.remove(".visionanimation");  
  document.querySelector(".buttonm").style.background = "radial-gradient(#23b499dd 10%,#2362b4dd)";
  document.querySelector(".buttonv").style.background = "none";
}*/