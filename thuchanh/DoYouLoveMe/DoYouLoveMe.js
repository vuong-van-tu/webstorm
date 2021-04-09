function yesClick(){
    alert('Yes. you are right');
}
function noHover(){
    let x = Math.round(Math.random() * window.innerHeight);
    let y = Math.round(Math.random() * window.innerWidth);
    document.getElementById('rdNO').style.left=x+'px';
    document.getElementById('rdNO').style.top=y+'px';
}