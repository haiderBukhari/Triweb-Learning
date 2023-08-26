let arr = [1,2,3,4,5,6]

//arrowfunction
let multiple = arr.map((arrdata)=>arrdata*arrdata)
//normal function
let double = arr.map(function(data){
    return data* data;
})
console.log({
    multiple : multiple,
    double : double
});