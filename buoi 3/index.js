function handleGiam() {

    var countEle = document.getElementById("count");

    var count = Number(countEle.innerHTML)
    var count = count - 1;
    countEle.innerHTML = count;
}


var tangEle = document.getElementById("tang");
// onclick: mong muon nhan vao la mot function 
// cach 1 
tangEle.onclick = function () {
    console.log('hahaha')

}
// cach 2
// function handleTang2(){}
// tangEle.onclick = handleTang2

document.getElementById('giam').onclick = function () {
    handleGiam();
};

// tuong tac voi o input 
document.getElementById("get").onclick = function () {

    // cach 1 
    var email = document.getElementById("exampleFormControlInput1").value

    console.log("gia tri cua o input la:", email);

    // Reset o input 
    email = document.getElementById("exampleFormControlInput1").value = "";
};

// boolean: true/false 
// Toan tu so sanh: > < >= <= == !=  </>
var r1 = 3 < 5;
var r2 = 3 > 5;
console.log("r1: 3<5", r1);
console.log("r2: 3>5", r2);

var num1 = 10;
var num2 = 20;
function calcSum(a, b) {
    return a + b;
}
var r4 = num1 > num2; //false
var r5 = num1 < num2; // true
var r6 = calcSum(num1, num2); //30
var r7 = num1 > calcSum(num1, num2); //false
var r8 = num1 == num1; //true
var r9 = num1 <= num2; //true
var r10 = calcSum(num1, 0) >= num1 //true

// If else
// dieu kien: boolean 
// if (dieukien)  {neu dieu kien dung thi chay code ben trong block nay}
// neu dieu kien sai thi chay code ben trong block nay 
// if(num1 >= num2){
//     console.log("num1 lon hon num2")
// }else {
//     console.log("num1 be hon num2")
// };

// if(num1 >= num2){
//     alert("num1 lon hon num2");}
// else {
//     if (num1 == num2){
//         alert("num1 bang num2");
//     }
//     else {
//         alert ("num1 be hon num 2")
//     }
// }

// Toan tu so sanh ket hop: &&, ||
// &, |: toan tu bit


// moi thu cac ban lay duoc tren document deu co kieu la string 

// 1 
document.getElementById("bt-1").onclick = function () {
    var soNhap = Number(document.getElementById("chan-le").value);

    if (soNhap == "") { alert("nhap gia tri vao o input") }

    if (soNhap % 2 != 0) { document.getElementById("kq-1").innerHTML = "so le" }
    else { document.getElementById("kq-1").innerHTML = "so chan" };
    document.getElementById("chan-le").value = ""
}

// diem trung binh 
document.getElementById("bt-2").onclick = function () {
    console.log("click");
    var diemToan = Number((document.getElementById("toan")).value);
    console.log((document.getElementById("toan")).value)


    var diemLy = Number((document.getElementById("ly")).value);
    var diemHoa = Number((document.getElementById("hoa")).value);
    var diemtb = (diemToan + diemLy + diemHoa)/3;
    var hocLuc = "";
    document.getElementById("dtb").innerHTML = "diem trung binh la:" + diemtb.toFixed(2);

    if (diemtb >= 8.5) { hocLuc = "gioi" }
    else {
        if (diemtb < 8.5 && diemtb >= 6.5) { document.getElementById("hoc-luc").value = "hoc kha" }

}
}