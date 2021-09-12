function runProgram(input){
    input = input.split("\n")
    var RC = input[0].split(" ").map(Number)
    var n = RC[0]
    var m = RC[1]
    var matrix = []

    for(var i=1; i<input.length; i++){
        matrix.push(input[i].split(" ").map(Number))
    }
    
    for(var j=0; j<m; j++){
        var transpose = []
        for(k=0; k<n; k++){

            transpose.push(matrix[k][j])
        }
        console.log(transpose.join(" "))
    }
}
runProgram(`5 4
0 0 0 0
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4`)