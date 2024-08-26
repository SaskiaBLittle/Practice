
function add(a, b){
    return a + b;
}

let a = parseFloat(prompt("Enter a number:"));
let b = parseFloat(prompt("Enter a number:"));

const div = document.getElementById("thing");
//            (a, b)
let num1 = add(a, b);
div.innerText = `${a} + ${b} = ${add(a, b)}`;