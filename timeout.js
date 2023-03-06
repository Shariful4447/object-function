
function doSomething(){
    console.log(3333);
}
console.log(1222);
setTimeout(function(){
    console.log('lazy waiting');

},4000)
// setInterval(function(){
//     console.log('doing it')
// },3000)
doSomething();
setTimeout(doSomething, 5000);
console.log(4444);

