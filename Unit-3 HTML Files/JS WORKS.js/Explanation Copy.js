// HOISTING
//In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution

console.log(str)
// output will be "undefined"

hello()
// output will be "Hii Albert "

 
function  hello(){
    console.log("Hii Albert") 
}
// function declaration

fun()
// fun is not a function
var fun = function  hii(){
    console.log("Hii Albert",str)  
}
// function expression
fun ()
// output will be "Hii Albert","undefined"

var str = "Raja"


// * SCOPE
// * Global
// * Functionl / local Scope
// * block Scope


var sum = 10

for(var i=0; i<10; i++){

    for(var j=0; j<20; j++){

        var sum = 30
    }
}

// console.log(i,j)
//output will be 10,20

// introducing let , const 

let sum = 20
for(let i=0; i<10; i++){

    for(let j=0; j<20; j++){

        let sum = 30
        console.log(sum)
        // output will be 10*20 times 30
    }
}
console.log(i)
//  reference error : i is not define
console.log(sum)
// output will br 20

// * var
// scopped: locally to a function, or a global scope 
// hoisted and accesible before assigning values
//redeclaretion possible
// can be reassign

    console.log(a)
    // cannot access "a" before intialization
    // Tempreal dead zone (TDZ)
    let a = 20
    let a = 30
    //SyntaxError: Identifier 'sum' has already been declared

    let p = 20;
    p = 30; 
    // cen be reassigned 
// * let
//scopped : to a block scope or local to a function 
// hoisted and not accesible before assigning values
// cannot redeclare
// cen be reassigned 



// * const
//scopped : to a block scope or local to a function 
// hoisted and not accesible before assigning values
// cannot redeclare

var s = 30; 
s = 40 
// cannot reassign
