//function visionplay() {
//  document.getElementsByClassName(".wrapper-holderhome").style.animationPlayState = "running";
//}


function vision() {
  document.querySelector(".wrapper-holderhome")
  document.querySelector(".wrapper-holderhome").style.transform = "translateX(0)";

  document.querySelector(".buttonv").style.animationPlayState = "paused";
  document.querySelector(".buttonm").style.animationPlayState = "paused";
  document.querySelector(".buttonv").style.background = "radial-gradient(#23b499dd 10%,#2362b4dd)";
  document.querySelector(".buttonm").style.background = "radial-gradient(#23b499aa 10%,#2362b466)";
}
