console.log("lien ket thanh cong")
//** toan tu operator */

var x =10;
var b = 20;
var y = x+b;
console.log('y=x+b=',y);
var y = x-b;
console.log('y=x-b=',y);
var y = x*b;
console.log('y=x*b=',y);
var y = x/b;
console.log('y=x/b=',y);
//**JS 5/3=1.66667 */

var z = 0.1;
console.log("5%3:::", 5 % 3);
console.log("5%4:::", 5 % 4);
console.log("5%5:::", 5 % 5);

//bai tap

var a = 3;
var b = 4;
var canhhuyen;
//su dung cong thuc pitago


//canh huyen bang
console.log("canh huyen =", Math.sqrt(a*a +b*b));

//bai2//
// input: n = 345
// output: 3+4+5 =12
var n = 586;
var output;

var hangtram = Math.floor(n/100);
var hangchuc = Math.floor((n%100)/10);
var hangdonvi = Math.floor(n%10);
output = hangtram + hangchuc + hangdonvi;

console.log(output);
// --Math.floor: lam tron xuong 
// Math.ceil: lam tron len 
// math.round: the value to be rounded to the nearest integer
// math.round(3.54)=>4
//---------------------------------------
var n = 100_000;
var m = 24;
console.log("luong nha vien =", n*m);

var a = 10;
var b = 20;
var c = 30;
var d = 40;
var e = 50;
console.log("trung binh=",((a+b+c+d+e)/5));






