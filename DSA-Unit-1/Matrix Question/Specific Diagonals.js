function runProgram(input){
    input = input.split("\n")
    var rc = input[0].split(" ").map(Number)
    var R = rc[0]
    var C = rc[1]
    var K = Number(input[R+1])
    var matrix = []
    // console.log(object)
    
    for(var i=1; i<=R; i++){
        matrix.push(input[i].split(" ").map(Number))
    }

    var upperDiagonal = []
    var lowerDiagonal = []

    for(var j=0; j<R; j++){

        for(var k=0; k<C; k++){
            
            if(matrix[j][k] === K){


                for(var l=0; l<R; l++){

                    for(var m=0; m<C; m++){
                        
                        if(l+m === j+k){
                            upperDiagonal.push(matrix[l][m])
                        }

                    }
                }

                if(j-k <= 0 ){
                    var uCol = Math.abs(j-k)

                    for(var n=0; n<R-uCol; n++){

                        for(var p=uCol+n; p<=uCol+n; p++){
                            
                            if(p < C ){

                                lowerDiagonal.push(matrix[n][p])
                                console.log(matrix[n][p])
                            }
                               
                            
                        }
                    }
                } 
                else if (j-k > 0){
                    var lCol = j-k
                    var r=0

                    for(var q=lCol; q<R; q++){

                        for( s=r; s<=r; s++){

                            if(s < C){

                                lowerDiagonal.push(matrix[q][s])
                                
                            }
                            
                        }
                        r++
                    }

                }
                
            }
        }
    }
    // console.log(lowerDiagonal.join(" "))
    // console.log(upperDiagonal.join(" "))
    
}
runProgram(`10 7
1 2 3 4 5 6 7
8 9 10 11 12 13 14
15 16 17 18 19 20 21
22 23 24 25 26 27 28
29 30 31 32 33 34 35
36 37 38 39 40 41 42
43 44 45 46 47 48 49
50 51 52 53 54 55 56
57 58 59 60 61 62 63
64 65 66 67 68 69 70
32`)