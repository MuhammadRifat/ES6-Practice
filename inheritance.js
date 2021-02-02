class Parent{
    constructor(){
        this.fName = "Anser";
        this.mName = "Suraiya Khatun";
    }
}

class Child extends Parent{
    constructor(Cname){
        super();
        this.name = Cname;
    }
    getFullName(){
        return this.name + " " + this.fName;
    }
}

const son1 = new Child("Rifat");
const son2 = new Child("Sifat");
const son3 = new Child("Rasin");
console.log(son1.getFullName());
console.log(son2.getFullName());
console.log(son3.getFullName());