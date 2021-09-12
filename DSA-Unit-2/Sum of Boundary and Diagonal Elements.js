function runProgram(input){
    input = input.split("\n")
    var n = Number(input[0])
    var twoDMatrix = []
    if(n % 2 != 0){

        var middleElement = Math.floor(n/2)
    }
    console.log(middleElement)
 
    for(var i=1; i<=n; i++){

        twoDMatrix.push(input[i].split(" ").map(Number))
    }

    var sum = 0

    for(var j=0; j<n; j++){

        for(var k=0; k<n; k++){

            if(j === 0){    // Upper Horizontal
                sum += twoDMatrix[j][k]
                // console.log(twoDMatrix[j][k])
                // console.log(sum)
            }

            if(j === n-1 && k>0){  // last column
                sum += twoDMatrix[k][j]
                // console.log(twoDMatrix[k][j])
                // console.log(sum)
            }

            if(j === n-1&& k<n-1){ // last Row
                sum += twoDMatrix[j][k]
                // console.log(twoDMatrix[j][k])
                // console.log(sum)
            }

            if (j === 0 && k<n-1 && k>=1){  // first row
                sum += twoDMatrix[k][j]
                // console.log(twoDMatrix[k][j])
            }

            if(j>0 && j<n-1 && k>0 && k<n-1 && (j === k) && (k != middleElement)){ // 17417 diagonal
                sum += twoDMatrix[j][k]
                console.log(twoDMatrix[j][k])
            }

            if(k+j === n-1  && j>0 && k<n-1 && j<n-1){      // 38495 diagonal

                sum += twoDMatrix[j][k]
                // console.log(twoDMatrix[j][k])
            }

        }
    }
    console.log(sum)
}
runProgram(`5
1 2 3 4 5
6 7 8 9 1
2 3 4 5 6
7 8 9 1 2
3 4 5 6 7`)