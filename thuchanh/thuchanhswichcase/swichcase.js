function tinh(){
    let month =+ document.getElementById('input').value;
    document.write("<br/>");
    switch (month){
        case 1:
        case 3:
        case 4:
        case 7:
        case 8:
        case 10:
        case 12:
            document.write('Tháng '+ month + ' có 31 ngày');
            break;
        case 2:
            document.write('Tháng 2 có 28 hoặc 29 ngày');
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.write('Tháng' + month + ' có 30 ngày ');
            break;

    }
}