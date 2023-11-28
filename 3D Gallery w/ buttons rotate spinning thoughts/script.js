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