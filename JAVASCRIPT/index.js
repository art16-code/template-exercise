var left = document.getElementById("left");
var right = document.getElementById("right");
var square =document.getElementsByClassName("square");
var elements = 8;
var currentIndex = 0;

function move(){
var size = square[0].offsetWidth;
 Array.from(square).forEach((item,index) => {
 var time = (index-currentIndex + elements)%elements;  
 item.style.transform = `translateX(${time*(size+20)}px)`
});
}
move();