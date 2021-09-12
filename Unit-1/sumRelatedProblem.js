function runProgram(input){
input = Number(input)
sum = 0
for(var i=1; i<=input; i++){
    if(i%2 === 0){
        sum += i
    }
}
console.log(sum)
}
runProgram(`8`)