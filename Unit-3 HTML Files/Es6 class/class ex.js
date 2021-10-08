class Person{
    #salary;
    constructor (name,age,salary){
        this.age = age
        this.name = name;
        this.salary = salary
    }

    getName(){
        console.log("My name is " + " " + this.name ,this.#salary)
    }
}

const person = new Person ("Raja" ,24,10000)
person.getName()


class Coder extends Person {
    constructor(name,age,profession){
        super(name,age)
        this.profession = profession
    }
    getName(){
        console.log(`My name is ${this.name}, and I am ${this.age} yearts old.  `)

    }
} 
const coder = new Coder("Raja",24,"Coder")

console.log(coder)

coder.getName()
coder.__proto__.getName.call(coder)
coder.__proto__.__proto__.getName.call(coder)