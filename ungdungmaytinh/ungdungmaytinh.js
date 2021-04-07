function toanhoc(){

    let input1 =+ document.getElementById("value1").value;
    let input2 =+ document.getElementById("value2").value;
    if(document.getElementById('toanhoc').value=='tong')
        document.getElementById('ketqua').value=input2+input1;
    else
        if(document.getElementById('toanhoc').value=='hieu')
        document.getElementById('ketqua').value=input2-input1;
        else
             if(document.getElementById('toanhoc').value=='tich')
        document.getElementById('ketqua').value=input2*input1;
             else
                if(document.getElementById('toanhoc').value=='thuong')
        document.getElementById('ketqua').value=input2/input1;
}
function reset(){
    document.getElementById("value1").value="";
    document.getElementById("value2").value="";
    document.getElementById("ketqua").value="";
}

// function tong(){
//      let a =+ document.getElementById("value1").value;
//      let b =+ document.getElementById("value2").value;
//      let Tong = a + b ;
//      document.getElementById('ketqua').value=Tong;
//
//  }
//  function hieu(){
//      let a =+ document.getElementById("value1").value;
//      let b =+ document.getElementById("value2").value;
//      let hieu = a-b;
//      document.getElementById('ketqua').value=hieu;
//
//  }
//  function tich(){
//      let a =+ document.getElementById("value1").value;
//      let b =+ document.getElementById("value2").value;
//      let tich = a * b ;
//      document.getElementById('ketqua').value=tich;
//
// }
//
//   function thuong(){
//     let a = document.getElementById("value1").value;
//      let b = document.getElementById("value2").value;
//      let thuong = a/b;
//      document.getElementById('ketqua').value=thuong;
//
//  }