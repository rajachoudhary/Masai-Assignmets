function runProgram(input){
input = input.split("\n")
var N = input[0].split(" ").map(Number)
var arr = input[1].split(" ").map(Number)
var count = 0
for(var i=0; i<N[0]; i++){

    for(var j=i+1; j<N[0]; j++){

        if(arr[i] + arr[j] === N[1]){
            count++
        }
    }
}
console.log(count)
}
runProgram(`2 4
2 2`)