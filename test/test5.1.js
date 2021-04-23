let array = [];
function Class(maKh,hoTen,ngaySinh,gioiTinh,diaChi){
    this.maKh = maKh;
    this.hoTen = hoTen;
    this.ngaySinh = ngaySinh;
    this.gioiTinh=gioiTinh;
    this.diaChi=diaChi;
}
function Add(){
   let str = "";
   str += '<input type="text" id="makh" placeholder="Mã khách hàng">'+
    '<input type="text" id="hoten" placeholder="Họ tên">'+
    '<input type="date" id="ngaysinh"  placeholder="Ngày sinh">'+
    '<input type="text" id="gioitinh" placeholder="Giới tính">'+
    '<input type="text" id="diachi" placeholder="Địa chỉ">';
   str += '<button id="save" onclick="save();">Save</button>'
   document.getElementById("add").innerHTML=str;

}
function save(){
    let makh = document.getElementById("makh").value;
    let hoten = document.getElementById("hoten").value;
    let ngaysinh = document.getElementById("ngaysinh").value;
    let gioitinh = document.getElementById("gioitinh").value;
    let diachi = document.getElementById("diachi").value;
    let obj = new Class(makh,hoten,ngaysinh,gioitinh,diachi);
    array.push(obj);
    display(array);
    document.getElementById("add").innerHTML = "";
}
function display(arr) {
    let str = "";
    str += '<table border="1px solid #d3d3d3">';
    str += '<tr><td>Mã Khách hàng</td><td>Họ Tên</td><td>Ngày Sinh</td><td>Giới tính</td><td>Địa chỉ</td>';
    for (let i = 0 ; i<arr.length;i++){
        str += '<tr>';
        str += '<td>'+arr[i].maKh +'</td>';
        str += '<td>'+arr[i].hoTen +'</td>';
        str += '<td>'+arr[i].ngaySinh +'</td>';
        str += '<td>'+arr[i].gioiTinh +'</td>';
        str += '<td>'+arr[i].diaChi +'</td>';
        str += '<td><button type="button" onclick="xoa('+i+')">DELETE</button></td>';
        str += '<td><button type="button" onclick="edit('+i+')">EDIT</button></td>';
        str += '</tr>';
    }
    str += '</table>';
    document.getElementById("display").innerHTML=str;
}
function xoa(i) {
    array.splice(i,1);
    display(array);
}



function edit(i) {
    let str = "<button type='button' onclick='change("+i+")'>Change Information</button>";
    str += `<input type="text" id="newmakh" value="${array[i].maKh}" >
            <input type="text" id="newhoten" value ="${array[i].hoTen}" >
            <input type="date" id="newngaysinh" value = "${array[i].ngaySinh}">
            <input type="text" id="newgioitinh" value = "${array[i].gioiTinh}">
            <input type="text" id="newdiachi" value = "${array[i].diaChi}">`;
    // str += '<button id="save" onclick="save();">Save</button>'
    document.getElementById("edit").innerHTML=str;
}
function change(i) {
    let makh = document.getElementById("newmakh").value;
    let hoten= document.getElementById("newhoten").value;
    let ngaysinh = document.getElementById("newngaysinh").value;
    let gioitinh = document.getElementById("newgioitinh").value;
    let diachi = document.getElementById("newdiachi").value;
    let obj=new Class(makh,hoten,ngaysinh,gioitinh,diachi);
    array[i]=obj;
    console.log(obj);
    display(array);
}