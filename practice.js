// function swap(str, a, b) {
//   var charArr = str.split("");
//   var temp = charArr[a];
//   charArr[a] = charArr[b];
//   charArr[b] = temp;
//   return charArr.join("");
// }

// function fun(str, l, r) {
//   if (l == r) {
//     console.log(str.split("").join(" "));
//   } else {
//     for (var i = l; i <= r; i++) {
//       str = swap(str, i, l);
//       fun(str, l + 1, r);
//     }
//   }
// }

// function runProgram(input) {
//   input = input.split("\n");
//   var n = Number(input[0]);
//   var arr = input[1].split(" ").join("");

//   fun(arr, 0, n - 1);
// }
// runProgram(`3
// 1 2 3`);


// Skip to content
// Search or jump to…
// Pull requests
// Issues
// Marketplace
// Explore
 
// @rajachoudhary 
// rajachoudhary
// /
// Masai-Assignmets
// Public
// 1
// 0
// 0
// Code
// Issues
// Pull requests
// Actions
// Projects
// Wiki
// Security
// Insights
// Settings
// Masai-Assignmets/Eva -3 DSA/Odd subset.js /
// @rajachoudhary
// rajachoudhary movie search engine
// Latest commit b04852b 4 days ago
//  History
//  1 contributor
// 46 lines (33 sloc)  810 Bytes
   
function odd(num,len){
    
    if(len < 0){
        return 0
    }
    else {
        
       return Math.sign(num[len]) + odd(num,len-1)
    }
    

}
var count = 0
function subset(eStr,N,arr,zero){

    if(zero <= N+1 && eStr != ""){
        
        var num = eStr.split(" ").map(Number)
        var len = num.length
        var output =  odd(num,len-1)
        // console.log(output % 2 )
        if(output % 2 !== 0 ){
            count++
        }
    }
    
    for(var i=zero; i<=N; i++){
        subset(eStr+arr[i],N,arr,i+1)
    }

}



function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var arr = input[1].split(" ").map(Number)
    
    subset("",N-1,arr,0)
    console.log(count)
}
runProgram(`2
-2 4`)

console.log(-2%2)
