
var name = 'kuddus';
function add(num1, num2){
    var result = num1 + num2;
    console.log('name inside',name);
    return result;
}
console.log('name outside',name);

var sum=add(13,21);
console.log(sum);