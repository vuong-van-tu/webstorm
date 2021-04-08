function up(){
    let element = document.getElementById("nhuanhbita");
    element.style.top = parseInt(element.style.top) - 100 + 'px';
}
function right(){
    let element = document.getElementById("nhuanhbita");
    element.style.left = parseInt(element.style.left) + 100 + 'px';
}
function down(){
    let element = document.getElementById("nhuanhbita");
    element.style.top = parseInt(element.style.top) + 100 + 'px';
}
function left(){
    let element = document.getElementById("nhuanhbita");
    element.style.left = parseInt(element.style.left) - 100 + 'px';
}
function moveSelection(evt){
    switch (evt.keyCode){
        case 37:
            left();
            break;
        case 38:
            up();
            break;
        case 39:
            right();
            break;
        case 40:
            down();
            break;
    }

}
function docReady(){
    window.addEventListener('keydown',moveSelection);
}
