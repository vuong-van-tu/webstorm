function createBoard() {
    let str = '';
    for (let i = 0; i < 10; i++) {
        str += '<tr>';
        for (let j = 0; j < 10; j++) {
            str += '<td onclick="clickCell(this)"></td>';
        }
        str += '</tr>';
    }
    document.getElementById('board').innerHTML = str;
}

function clickCell(td) {
    if (td.innerHTML == VALUE_EMPTY) {
        if (turn == PLAYER_X) {
            td.innerHTML = VALUE_X;
            turn = PLAYER_O;
        } else {
            td.innerHTML = VALUE_O;
            turn = PLAYER_X;
        }
    }
}