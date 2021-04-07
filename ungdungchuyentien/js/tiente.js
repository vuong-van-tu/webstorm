function convert() {
    let input = document.getElementById('nhap').value;
    let a = document.getElementById('benA').value;
    let b = document.getElementById('benB').value;

    if(input > 0)
        if(a=='VNĐ'&& b=='USD')
            document.getElementById('output').value=input*(1/23000);
        else
            if (a=='USD'&& b=='VNĐ')
                document.getElementById('output').value=input*23000;
            else
            document.getElementById('output').value=input;
    else
        alert("Gía trị không thỏa mãn!")


}