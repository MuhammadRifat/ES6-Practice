const Person = {name: 'Rifat', age: 22, occasion: 'Student', class: "Hon's", Weight: 58};
const {name, age} = Person;
console.log(name, age);

const friends = ['Rakib', 'Uzzal', 'Rasel', 'Kawser'];
const [first, ...allFriends] = friends;
console.log(first, allFriends);