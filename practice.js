// var a = {
//     0:1,
//     1:2,
//     2:3,
//     3:4,
//     length:1,
//     push: function(){
//         // a[this.length]
//         console.log(a[this.length])
//         console.log(this.length)
//     }
// }

// // a.push()
// console.log(a)

// function MyArray(){
//     this.length = 0,
//     this.push=function(value){
//         this[this.length++]=value
//         return 
//     }
// }
// var arr = new MyArray()
// arr.push(1)
// arr.push(8)
// arr.push(2)
// // arr()
// console.log(arr)
// // console.log(MyArray)

function Person(name,age,profession){
    this.name= name
    this.age = age
    this.profession = profession
}
Person.prototype.greet = function(user){
    console.log("Hey",user,"I am",this.name)
}
var person = new Person("Raja",23,"Coder")
console.log(person.__proto__)
console.log(Person.prototype)