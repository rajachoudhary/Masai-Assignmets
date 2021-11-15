function runProgram(input){
    input = input.split("\n")
    var T = Number (input[0])
    var line = 1
    
    for(var i=0; i<T; i++){

        var R = Number(input[line++])
        var arr = input.slice(line++ ,line+R-1 )
       

        var matrix = []
        for(var j=0; j<arr.length; j++){
            matrix.push(arr[j].split(" ").map(Number))
        }
       
        line = line+R-1
        var output = []
        for(var k=0; k<R; k++){

            for(var l=0; l<R-1; l++){
                output.push(matrix[l][k])
            }
            break;
            
        }

        for(var m=R-1; m>=0; m--){

            for(var n=0; n<R-1; n++){

                if(m+n === R-1){
                    output.push(matrix[m][n])
                }
            }

        }

        for(var s =R-1; s>=0; s--){

            for(var p =0; p<R; p++){

                output.push(matrix[p][s])
            }
            break
        }
        console.log(output.join(" "))
    }
}
runProgram(`1
3
1 2 3
4 5 6
7 8 9`)