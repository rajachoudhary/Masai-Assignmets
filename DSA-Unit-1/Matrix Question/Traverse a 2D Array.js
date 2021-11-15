function runProgram(input){
input = input.split("\n")
var rc = input[0].split(" ").map(Number)
var N = Number(rc[0])
var M = Number(rc[1])

var matrix = []
for(var i=1; i<=N; i++){

    matrix.push(input[i].split(" ").map(Number))
}

var output = []
for(var j=0; j<M; j++){
    
    for(var k=matrix.length-1; k>=0; k--){
       output.push(matrix[k][j])
    }
}
console.log(output.join(" "))

}
runProgram(`4 3
1 8 9
2 7 10
3 6 11
4 5 12`)