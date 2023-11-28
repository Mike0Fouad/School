//function visionplay() {
//  document.getElementsByClassName(".wrapper-holderhome").style.animationPlayState = "running";
//}
const wrapper = document.querySelector(".wrapper-holderhome");

const buttonmission = document.querySelector(".buttonm");
const buttonvision = document.querySelector(".buttonv");

const panimatedv = document.querySelector(".panimatedv");
const panimatedm = document.querySelector(".panimatedm");

buttonmission.addEventListener("click", function () {

  panimatedm.classList.remove("homeanimationv");
  panimatedm.classList.remove("homeanimationm");

  buttonmission.classList.remove("missionanimation");
  buttonvision.classList.remove("visionanimation");

  panimatedv.style.opacity = "0";
  panimatedm.style.opacity = "1";
  buttonmission.style.background = "radial-gradient(#23b499dd 10%,#2362b4dd)";
  buttonvision.style.background = "radial-gradient(#23a7a766 10%,#2362b444)";
});

buttonvision.addEventListener("click", function () {

  panimatedm.classList.remove("homeanimationm");
  panimatedv.classList.remove("homeanimationv");

  buttonvision.classList.remove("visionanimation");
  buttonmission.classList.remove("missionanimation");

  panimatedv.style.opacity = "1";
  panimatedm.style.opacity = "0";
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