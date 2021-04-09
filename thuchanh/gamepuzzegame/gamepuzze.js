let a1 = "https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part1x1.jpg"
let a2 = "https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part2x1.jpg"
let a3 = "https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part3x1.jpg"
let a4 = "https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part4x1.jpg"
let a5 = "https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part5x1.jpg"

let b1 = "https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part1x1.jpg"
let b2 = "https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part2x1.jpg"
let b3 = "https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part3x1.jpg"
let b4 = "https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part4x1.jpg"
let b5 = "https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part5x1.jpg"

let c1="https://demo.codegym.vn/8/puzzlegame/img/monkey_part1x1.jpg"
let c2="https://demo.codegym.vn/8/puzzlegame/img/monkey_part2x1.jpg"
let c3="https://demo.codegym.vn/8/puzzlegame/img/monkey_part3x1.jpg"
let c4="https://demo.codegym.vn/8/puzzlegame/img/monkey_part4x1.jpg"
let c5="https://demo.codegym.vn/8/puzzlegame/img/monkey_part5x1.jpg"

function thaydoi(){
    let anh1 = document.getElementById('1');
    if (anh1.src==a1){
        anh1.src=b1;
}else if (anh1.src==b1){
        anh1.src=c1;
    }
    else {
        anh1.src=a1;
    }
    abc();
}

function thaydoi1(){
    let anh2 = document.getElementById('2');
    if (anh2.src==a2){
        anh2.src=b2;
    }else if (anh2.src==b2){
        anh2.src=c2;
    }
    else {
        anh2.src=a2;
    }
    abc();
}

function thaydoi2(){
    let anh3 = document.getElementById('3');
    if (anh3.src==a3){
        anh3.src=b3;
    }else if (anh3.src==b3){
        anh3.src=c3;
    }
    else {
        anh3.src=a3;
    }
    abc();
}

function thaydoi3(){
    let anh4 = document.getElementById('4');
    if (anh4.src==a4){
        anh4.src=b4;
    }else if (anh4.src==b4){
        anh4.src=c4;
    }
    else {
        anh4.src=a4;
    }
    abc();
}

function thaydoi4(){
    let anh5 = document.getElementById('5');
    if (anh5.src==a5){
        anh5.src=b5;
    }else if (anh5.src==b5){
        anh5.src=c5;
    }
    else {
        anh5.src=a5;
    }
    abc();
}
function abc(){
 if (
     document.getElementById('1').src==a1 &&
     document.getElementById('2').src==a2 &&
     document.getElementById('3').src==a3 &&
     document.getElementById('4').src==a4 &&
     document.getElementById('5').src==a5 ||
            document.getElementById('1').src==b1 &&
            document.getElementById('2').src==b2 &&
            document.getElementById('3').src==b3 &&
            document.getElementById('4').src==b4 &&
            document.getElementById('5').src==b5 ||
    document.getElementById('1').src==c1 &&
    document.getElementById('2').src==c2 &&
    document.getElementById('3').src==c3 &&
    document.getElementById('4').src==c4 &&
    document.getElementById('5').src==c5
        ){

      document.getElementById('fuck').style.backgroundColor="red";
 }
}
