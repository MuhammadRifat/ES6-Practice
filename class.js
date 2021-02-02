class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.age = 21;
    }
}

const student1 = new Student(1, "Rifat");
const student2 = new Student(2, "Rakib");
console.log(student1, student2);