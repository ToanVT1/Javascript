// ** Bước 1: phải lấy đươc element chúng ta muốn thao tác.
// // ** bước 2: chỉnh màu thành đỏ

// /** */
// /*/ document.getElementById(<ID>)

// - Biết có id ở trên giao file html
// - Nên nó sẽ trả về element chúng ra cần lấy
// *

var h1Ele = document.getElementById ("hello");
console.log(h1Ele);

var h2Ele = document.getElementById ("h2");
console.log(h2Ele);

// co the xem 2 cai la 1
// undefined
// null
//-- can thiep thay doi style cua element
h1Ele.style.color = 'red';
h1Ele.style.fontSize = "50px";
h1Ele.style.backgroundColor = "blue";
//--Thay doi noi dung ben trong
h1Ele.innerHTML = "Vo Thanh Toan";
h1Ele.id = "hi";
console.log(document.getElementById("hi"));
console.log(document.getElementById("hello"));

//#region: lay noi dung
var h2Ele = document.getElementById("h2");
var textH2 = h2Ele.innerHTML;

console.log(textH2);
console.log(h2Ele.id)
//#region
var h3Ele = document.getElementById("h3");
console.log(h3Ele);
h3Ele.style.backgroundColor = 'blue';
h3Ele.style.color = "red";
h3Ele.style.fontSize = "50px";

var h4Ele = document.getElementById("h4");
console.log(h4Ele);
console.log(h4Ele.innerHTML);//[Get]
h4Ele.innerHTML = "hello"; // [Set]
console.log(h4Ele.innerHTML);

//# Function: html, chuc nang.
// khai bao 
function tinhTong() {
    //code

    console.log("tinh tong");
   var a = 1;
   var b = 2;
   var tong = a + b;
   console.log(tong);
}
// -su dung:: goi function 
tinhTong();

// # region toggle lamp
function handleToggle(){
    console.log('toggle');
var on = document.getElementById("bat");
var off = document.getElementById ("tat");
on.style.display = "inline-block";
off.style.display = "none";

}
 function handleButton(){
 
    var countEle = document.getElementById("count"); 
    var count = Number(countEle.innerHTML) +1;
    // count = count + 1;
    countEle.innerHTML = count;
 }

 function handleButton2(){
   
    var countEle = document.getElementById("count");

    var count = Number(countEle.innerHTML)
    var count = count -1;
    countEle.innerHTML = count;
 }

 function changecolor(brcolor){
    var redEle = document.getElementById ("color");
    // var Redbutton = redEle.innerHTML.backgroundColor;
    redEle.style.backgroundColor = brcolor;
 }
 
// Tham so function
function calsum(a,b){
    var sum = a+b;
    console.log(sum)
}
calsum (2,4);

// ** pham vi su dung bien scope
// - global
// - local
// - Block (loading...)

// .............................................
//Tra ve gia tri

function concatstring(str1, str2){
    var result = str1 + "-----"+str2;
    return result;
}
var str = concatstring ('Hello', 'World');
console.log(str);
