function runProgram(input){
input = input.split("\n")
var N = Number(input[0])

for(var i=1; i<=N; i++){
    var sides = input[i].split(" ").map(Number)
   
    if(sides[0] + sides[1] > sides[2] 
    && sides[1] + sides[2] > sides[0]
    && sides[2] + sides[0] > sides[1]){
        console.log(("Yes"))
    } 
    else{
        console.log("No")
    }
}
}
runProgram(`4
4 5 13
7 1 8
2 5 4
2 2 2`)