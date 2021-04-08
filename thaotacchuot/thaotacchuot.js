let img0bj = null ;
imgObj = document.getElementById('myImage');
function init(){
    img0bj=document.getElementById("myImage");
    img0bj.style.position = "relative";
    img0bj.style.left="0px";
}
function moveRight(){
    img0bj.style.left = parseInt(img0bj.style.left) + 100 + 'px';
}
function moveLeft(){
    img0bj.style.left = parseInt(img0bj.style.left) - 100 + 'px';
}

window.onload = init;