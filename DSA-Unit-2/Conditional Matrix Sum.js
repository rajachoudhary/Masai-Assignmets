function runProgram(input){
    input = input.split("\n")
    var nm = input[0].split(" ").map(Number)
    var n = nm[0]
    var m = nm[1]
    var twoDMatrix = []
    var sum = 0
    for(var i=1; i<=n; i++){

        twoDMatrix.push(input[i].split(" ").map(Number))
    }

    for(var j=0; j<n; j++){

        for(var k=0; k<m; k++){

            if(twoDMatrix[j][k] % 3 === 0){
                sum += twoDMatrix[j][k]
            }
        }
    }
    console.log(sum)
}
runProgram(`2 3
3 1 8
2 6 0`)