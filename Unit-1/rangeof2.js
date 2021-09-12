function runProgram(input){
input = input.split (" ").map(Number)
var L = input[0]
var R = input[1]

for(var i=L; i<=R; i+=i){

    console.log(i)
}
}
runProgram(`4 10`)