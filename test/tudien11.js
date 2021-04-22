
module.exports = {
    iterArr
};

function iterArr(arr) {
    var sum = 0;
    //Your code here

    let sum ;
    for (let i =0 ; i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}