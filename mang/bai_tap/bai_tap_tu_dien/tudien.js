let english = ["Cat","Dog","Bat","Fish","Pig","Chicken"];
let vn = ["Mèo","Chó","Dơi","Cá","Heo","Gà"];


function myfunction(){
    let a= document.getElementById("english").value;
    let index=english.indexOf(a);
    if (index==-1) {
        alert("Không tìm thấy từ trong từ điển ");
    }else {
        document.getElementById("output").value=vn[index];
    }
}

