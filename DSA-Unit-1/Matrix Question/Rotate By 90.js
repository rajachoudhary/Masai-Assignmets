function runProgram(input){
    input = input.split("\n")
    var RC = Number(input[0])
    var matrix = []
    for(var i=1; i<=RC; i++){
        matrix.push(input[i].split(" ").map(Number))
    }
    for(var j=RC-1; j>=0; j--){
        var rotateMAtrix = []

        for(var k=0; k<RC; k++ ){
            rotateMAtrix.push(matrix[k][j])
        }
        console.log(rotateMAtrix.join(" "))
    }
}
runProgram(`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`)