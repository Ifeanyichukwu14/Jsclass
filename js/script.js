// let age = 15;

// if(age > 18){
//     document.getElementById("demo").innerHTML = "Welcome to Dom";

// }else{
//     document.getElementById("demo").innerHTML = "Welcome to Dom";

// }


// document.querySelector("p").innerHTML = "Welcome to Dom";

// document.querySelectorAll("p")[0].innerHTML = "Welcome to Dom 1";
// document.querySelectorAll("p")[1].innerHTML = "Welcome to Dom 2";

// document.querySelector(".result").innerHTML ="2 + 2 = 4";


function sum() {
    let num1 = document.querySelector("#num1").value;

    let num2 = document.querySelector("#num2").value;

    let total = +num1 + +num2;

     console.log(total);

    document.querySelector("#result").innerHTML = total;
}

function substract() {
    let num1 = document.querySelector("#num1").value;

    let num2 = document.querySelector("#num2").value;

    let total = +num1 - +num2;

    console.log(total);

    document.querySelector("#result").innerHTML = total;
}

function division() {
    let num1 = document.querySelector("#num1").value;

    let num2 = document.querySelector("#num2").value;

    let total = +num1 / +num2;

    console.log(total);

    document.querySelector("#result").innerHTML = total;
}

function Multiplication() {
    let num1 = document.querySelector("#num1").value;

    let num2 = document.querySelector("#num2").value;

    let total = +num1 * +num2;

    console.log(total);

    document.querySelector("#result").innerHTML = total;
}