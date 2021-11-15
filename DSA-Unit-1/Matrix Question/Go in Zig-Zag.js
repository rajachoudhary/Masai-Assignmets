function runProgram(input){
    input = input.split("\n")
    var rc = input[0].split(" ").map(Number)
    var N = Number(rc[0])
    var M = Number(rc[1])
    

    var matrix = []
    for(var i=1; i<=N; i++){
        matrix.push(input[i].split(" ").map(Number))
    }
    console.log(matrix)
    // var output = []
    // for(var j=0; j<N; j++){

    //     if(j%2 === 0){
    //         for(var k=M-1; k>=0; k--){
    //             output.push(matrix[j][k])
    //         } 
    //     }
    //     else{
    //         for(var k=0; k<M; k++){
    //             output.push(matrix[j][k])
    //         } 
    //     }
        
    // }
    // console.log(output.join(" "))
}
runProgram(`5 5
4 7 1 1 7
8 9 9 6 1
6 4 9 5 1
7 7 4 7 7
8 6 2 5 5`)

// console.log(1%2)