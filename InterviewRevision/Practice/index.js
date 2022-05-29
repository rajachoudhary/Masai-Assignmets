// function x(){
//     for (var i = 0; i <= 5; i++) {
//         setTimeout(function(){
//             console.log(i)
//         },1000)
        
//     }
// }
// x()
function outer(){
    let a = "raja"
    return function inner(){
        console.log(a)
    }
    // return inner
}
let z = outer()
// console.log(z())
z()