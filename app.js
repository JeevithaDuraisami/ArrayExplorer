let el = document.getElementById("letter");
let input = document.getElementById("Box"); // Fixed ID reference

function btn1() {
    let numbers = input.value.split(",").map(Number); // Convert to numbers
    let sum = numbers.reduce((acc, num) => acc + num, 0); // Sum calculation
    el.innerHTML = "Sum: " + sum;
}

function btn2() {
    let value = input.value.split(",").map(Number); // Convert to numbers
    value.sort((a, b) => a - b); // Numerical sort
    el.innerHTML = "Sorted: " + value.join(", ");
}

function btn3() {
    let value = input.value.split(",").map(Number); // Convert to numbers
    el.innerHTML = "Reversed: " + value.reverse().join(", ");
}

function btn4() {
    let numbers = input.value.split(",").map(Number);
    const even = numbers.filter(num => num % 2 === 0);
    el.innerHTML = "Even: " + even.join(", ");
}

function btn5() {
    let numbers = input.value.split(",").map(Number);
    const odd = numbers.filter(num => num % 2 !== 0);
    el.innerHTML = "Odd: " + odd.join(", ");
}

function btn6() {
    let numbers = input.value.split(",").map(Number);
    let max = Math.max(...numbers); // Use Math.max()
    el.innerHTML = "Max: " + max;
}

function btn7() {
    let numbers = input.value.split(",").map(Number);
    let min = Math.min(...numbers); // Use Math.min()
    el.innerHTML = "Min: " + min;
}
