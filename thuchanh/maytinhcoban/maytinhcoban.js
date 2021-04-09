let scr = document.getElementById('input');

function p1(value) {
    scr.value += value;
}

function clr() {
    scr.value = "";
}

function  tinh(){
    scr.value = eval(scr.value);
}

