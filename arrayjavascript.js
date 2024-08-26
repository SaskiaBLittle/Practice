let numbers = [4, 7, 1, 9, 5];
let maxNumber = numbers[0];

for (let i = 1; i < numbers.length; i++){
    if (numbers[i] > maxNumber){
        maxNumber = numbers[i];
    }
}
const arr = document.getElementById("array");
arr.innerText = `The maximum number is: ${maxNumber}, from the array ${numbers}`;

//Could make it so that the user can input there own numbers into the array