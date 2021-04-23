let array = [];
function Class(x, y, z) {
    this.id = x;
    this.name = y;
    this.cost = z;
}
function Add(arr) {
    let x = prompt("id");
    let y = prompt("name");
    let z = prompt("cost");
    let obj = new Class(x, y, z);
    arr.push(obj);
    display(array);
}
function display(arr) {
    let str = " ";
    str += '<table style="color: white">';
    str += '<tr><td>ID</td><td>NAME</td><td>COST</td>';
    for (let i = 0; i < arr.length; i++) {
        str += '<tr>';
        str += '<td>' + arr[i].id + '</td>';
        str += '<td>' + arr[i].name + '</td>'
        str += '<td>' + arr[i].cost + '</td>'
        str += '<td><button onclick="remove(' + i + ')" type="button">Delete</button></td>'
        str += '<td><button onclick="Edit(' + i + ')" type="button">Edit</button></td>'
        str += '<tr>';
    }
    str += '</table>';
    document.getElementById("inp").innerHTML = str;
}
function remove(index) {
    array.splice(index, 1);
    display(array);
}
function Edit(index) {
    let a = prompt("ID", array[index].id);
    let b = prompt("NAME", array[index].name);
    let c = prompt("COST", array[index].cost);
    array[index].id = a;
    array[index].name = b;
    array[index].cost = c;
    display(array);
}