function runProgram(input){
    input = input.split("\n")
    var NM = input[0].split(" ").map(Number)
    var N = NM[0]
    var M = NM[1]
    var twoDMatrix = []

    for(var i=1; i<input.length; i++){
        twoDMatrix.push(input[i].split(""))
    }
    
    var count = 0
    
    for(var j=0; j<N; j++){

        for(var k=0; k<M-3; k++){
       
            if(twoDMatrix[j][k]+twoDMatrix[j][k+1]+twoDMatrix[j][k+2]+twoDMatrix[j][k+3] === "saba"){
                count++
                // console.log(twoDMatrix[j][k]+twoDMatrix[j][k+1]+twoDMatrix[j][k+2]+twoDMatrix[j][k+3])
            }
            
            if(j<N-3){
                
                if(twoDMatrix[j][k]+twoDMatrix[j+1][k+1]+twoDMatrix[j+2][k+2]+twoDMatrix[j+3][k+3] === "saba"){
                    count++
                }
            //     console.log(twoDMatrix[j][k]+twoDMatrix[j+1][k+1]+twoDMatrix[j+2][k+2]+twoDMatrix[j+3][k+3])
                
            }

            if(j>2){

                if(twoDMatrix[j][k]+twoDMatrix[j-1][k+1]+twoDMatrix[j-2][k+2]+twoDMatrix[j-3][k+3] === "saba"){
                    count++
                }
            //     console.log(twoDMatrix[j][k]+twoDMatrix[j-1][k+1]+twoDMatrix[j-2][k+2]+twoDMatrix[j-3][k+3])
            }

        }
    }
    for(var l=0; l<M; l++){
        console.log(l)
        for(var m=0; m<N-3; m++){
       

            if(twoDMatrix[m][l]+twoDMatrix[m+1][l]+twoDMatrix[m+2][l]+twoDMatrix[m+3][l] === "saba"){
                count++
            }
            
        }
    }
    console.log(count)
}
runProgram(`5 7
sabarab
amjadbb
babolcb
aasabab
songseb`)