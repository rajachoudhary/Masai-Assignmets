function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.greet = function(user) {
        console.log(`hey ${user}, I am ${this.name}`);
    }
}

function Coder(name, age,) {
    Person.apply(this, [name, age, "Coder"]);
    this.code = function(){
        console.log(`${this.name} is coding...`)
    }
}

function Baker(name, age) {
    Person.apply(this, [name, age, "Baker"])
    this.bake = function(){
        console.log(`${this.name} id baking...`)
    }
}

var c = new Coder("Albert", 25)
var b = new Baker("Albert", 26)
console.log(c)
c.name = "raja"
console.log(c)
console.log(b)
c.code()
b.bake()