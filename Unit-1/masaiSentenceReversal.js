function runProgram(input){
input = input.split(" ")
var output = ""
for(var i=input.length - 1; i>=0; i--){
    
    output += input[i] + " "
}
console.log(output)
}
runProgram(`A Transformation in education`)