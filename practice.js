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

// function Person(name,age,profession){
//     this.name= name
//     this.age = age
//     this.profession = profession
// }
// Person.prototype.greet = function(user){
//     console.log("Hey",user,"I am",this.name)
// }
// var person = new Person("Raja",23,"Coder")
// console.log(person.__proto__)
// console.log(Person.prototype)

// console.log(2/1)]




// function MyArray(){
    
//     Object.defineProperty(this,"length",{
//         value:0,
//         writable:true ,

//     })
// }
// PUSH
// MyArray.prototype.push = function(value){
//     this[this.length] = value;
//     this.length++
//     // console.log(this)
//     return this.length; 
// }
// //MAP
// MyArray.prototype.map = function(callback){
//     var  result = new MyArray()
//     // for(var index in this){
//     //     if(this.hasOwnProperty(index)){
//     //         var returnElement = callback(this[index]);
//     //         result.push(returnElement)
//     //     }
//     // }
//     // return result;
//     console.log(result)
// }
// var arr = new MyArray();
// arr.push(5)
// arr.push(10)
// // console.log(arr,arr.length)

// // let res = arr.map(function (el){
// //     return el*el
// // })
// // console.log(res)

// function Person(name, age, profession) {
//     this.name = name;
//     this.age = age;
//     this.profession = profession;
    
// }

// Person.prototype.greet = function(user) {
//     console.log(`hey ${user}, I am ${this.name}`);
// }

// function Coder(name, age,) {
//     Person.call(this, name, age, "Coder");
    
// }

// Coder.prototype = Object.create(Person.prototype)
// var coder = new Coder("Nrupul",24);
// console.log(coder)
// coder.greet("Albert")
// console.log(coder.__proto__.__proto__)

// var person = {
//     name: "Raju",
//     nationality: "Indian"
// }
// var child = Object.create(person)
// child.name  = "Manu"
// console.log(child.__proto__)
// var stri = "rajas"
// console.log(stri)
// var greet = function(){
//     console.log(stri)
//     var str = "sonu"
//     console.log(str)
// }
// greet()
//  console.log(greet.__proto__ ) 

function a(){
    function b(){
        console.log(x)
        function c(){
            var x = 10
        }
        c()
    }
    b()
}
a()
console.log(x)