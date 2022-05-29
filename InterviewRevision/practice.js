// let learnDebounce = ()=>{
//     console.log("Raja")
// }
// let debouncing = (func, delay)=>{
//     let debounce;
//     return function (){
//         debounce && clearTimeout(debounce);
//         debounce = setTimeout(()=> func(),delay)
//     }
// }

// window.addEventListener("load", function(){
//     let btn = document.getElementById("clickMe")

    
//     btn.addEventListener("click",debouncing(learnDebounce,5000))
// })




// function toggler(){
//     var arr = arguments
//     // console.log(arr)
//     let index = -1
//     return function(){

//         index = index+1
//         if(index>= arr.length){
//             index = 0
//         }
//         return arr[index]
//     }
// }
// const toggle = toggler(1, 2, 3);
// console.log(toggle())
// console.log(toggle())
// console.log(toggle())
// console.log(toggle())
// toggle();
// toggle();
// toggle();
// toggle();


// function calculator(initValue=0){
//     let value = initValue
//     function add(val){
//         value = value+val
//         return value
//     }
//     return [add, value*2 ]
// }
// var calc = calculator()
// let x = calc[0]
// console.log(x(5))
// console.log(x(5))
// var a ;
// a = 1
// console.log(a)
console.log(20/2)


let N = 256
let value = N
for (let i = 0; i < N; i++) {
   
    let num = value/2
    value = num
    if(num === 1){
        console.log("Yes")
        break
    } else if (num - Math.floor(num) != 0){
        console.log("No")
        break
    } 
    
}
// console.log(2.25/2)