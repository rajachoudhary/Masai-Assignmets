const arr = 143
let arr2 = arr

let output = []
for (let i = 0; i < arr; i++) {
    
    let rem =  arr2%10
   
    let div  = Math.floor(arr2/10)
   
    arr2 = div
    output.push(rem)
    if(div === 0){
        break;
    }
    
}
console.log(output);


// console.log(1%10); // 3
// console.log(Math.floor(0/10)); // 14