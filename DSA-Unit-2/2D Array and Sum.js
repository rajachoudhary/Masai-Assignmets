function runProgram(input){
    input = input.split("\n")
    var nmp = input[0].split(" ").map(Number)
    var N = nmp[0]
    var M = nmp[1]
    var P = nmp[2]
    var twoDMatrix = []

    for(var i=1; i<input.length; i++){
        twoDMatrix.push(input[i].split(" ").map(Number))
    }
    
    var count = 0
    
    for(var j=0; j<N; j++){

        for(var k=0; k<M; k++){

            if(k<M-2){  // row

                if(twoDMatrix[j][k]+twoDMatrix[j][k+1]+twoDMatrix[j][k+2] === P){
                    // console.log(twoDMatrix[j][k],twoDMatrix[j][k+1],twoDMatrix[j][k+2])
                    count++
                }
            }

            if(k<N-2){  // column

                if(twoDMatrix[k][j]+twoDMatrix[k+1][j]+twoDMatrix[k+2][j] === P){
                    // console.log(twoDMatrix[k][j],twoDMatrix[k+1][j],twoDMatrix[k+2][j])
                    count++
                }
            }

            if(j<M-2 && k<M-2){ //
                
                if(twoDMatrix[j][k]+twoDMatrix[j+1][k+1]+twoDMatrix[j+2][k+2] === P){
                    count++
                }
                // console.log(twoDMatrix[j][k],twoDMatrix[j+1][k+1],twoDMatrix[j+2][k+2])
                
            }

            if(j>1 && k<M-2){

                if(twoDMatrix[j][k]+twoDMatrix[j-1][k+1]+twoDMatrix[j-2][k+2] === P){
                    count++
                }
                // console.log(twoDMatrix[j][k],twoDMatrix[j-1][k+1],twoDMatrix[j-2][k+2])
            }

        }
    }
    console.log(count)
}
runProgram(`4 4 6
3 2 1 5
2 2 2 5
1 5 1 6
2 3 1 2`)