function runProgram(input){
var output = ""
for(var i=input.length - 1; i>=0; i--){
    output += input[i]
}
if(output === input){
    console.log("Yes")
} else{
    console.log("No")
}
}
runProgram(`1221`)