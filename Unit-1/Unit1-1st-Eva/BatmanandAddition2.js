function runProgram(input){

input = input.split("\n")
var N = Number(input[0])
var str = input[1]
// console.log(str)
var count = 0
for(var i=0; i<N; i++){

    if(str[i] === "A"){
        count++
    }
}

if(count % 2 != 0){
    
}
console.log(count)
}
runProgram(`6
AATGCC`)