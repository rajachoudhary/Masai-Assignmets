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

        for(var k=0; k<M-2; k++){

            if(twoDMatrix[j][k]*twoDMatrix[j][k+1]*twoDMatrix[j][k+2] === P){
                count++
            }

            if(twoDMatrix[k][j]*twoDMatrix[k+1][j]*twoDMatrix[k+2][j] === P){
                count++
            }
               
            if(j<N-2){
                
                if(twoDMatrix[j][k]*twoDMatrix[j+1][k+1]*twoDMatrix[j+2][k+2] === P){
                    count++
                }
                
            }

            if(j>1){

                if(twoDMatrix[j][k]*twoDMatrix[j-1][k+1]*twoDMatrix[j-2][k+2] === P){
                    count++
                }
            }

        }
    }
    console.log(count)
}
runProgram(`4 4 16
1 2 1 8
2 2 8 6
8 1 2 5
2 5 8 6`)