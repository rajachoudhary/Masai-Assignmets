function runProgram(input){

var count = 1
var total = ""

for(var i=0; i<input.length; i++){

    if(input[i] === input[i+1]){
        count++
    } else{
        total += input[i] +  count
        count = 1
    }
}
console.log(total)

}
runProgram(`aaabbbbcc`)