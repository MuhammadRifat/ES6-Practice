const age = [10, 11, 12, 13];
const age2 = [14, 15, 16, 17];
const age3 = [18, 19, 20, 21];
const allAge = age.concat(age2).concat([22]).concat(age3);

// const allArray = [age, age2, 22, age3];
const allArray = [...age, ...age2, 22, ...age3];
console.log(allArray);

const first = 30;
const second = 20;
const third = 50;
console.log(Math.max(first, second, third));

console.log(Math.max(...allArray));
