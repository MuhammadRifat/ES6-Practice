// function add(x, y) {
//     return x + y;
// }

// const showFive = function () {
//     return 5;
// }
// const result = showFive();

const add = (num1, num2) => num1 + num2;
// const result = add(20, 25);
// console.log(result);

const showNumber = (num) => num;
// const result = showNumber(100);
// console.log(result);

const showTen = () => 10;
// const result = showTen();
// console.log(result);

const multiLine = (num1, num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mul = num1 * num2;
    return sum + diff + mul;
}
const result = multiLine(10, 20);
console.log(result);
