function runProgram(input){
    input = input.split("\n")
    var matrix = []
    
    for(var i=0; i<input.length; i++){
        matrix.push(input[i].split(" "))
    }
   
    var count1 = 0
    var count2 = 0
    var count3 = 0
    var count4 = 0

    for(var j=0; j<matrix.length; j++){

        var count5 = 0
        var count6 = 0
        
        for(var k=0; k<matrix.length; k++){
            
            if(matrix[j][k] === "x" && matrix[j][k+1] === "x" && matrix[j][k+2] === "x"){
                console.log("x")
                
            } 
            else if (matrix[j][k] === "o" && matrix[j][k+1] === "o" && matrix[j][k+2] === "o"){
                console.log("o")
                
            }
            
            if (j === k){
                
                if(matrix[j][k] === "x"){
                    count1++
                } else {
                    count2++
                }

            } 

            if(k+j === matrix.length-1){

                if(matrix[j][k] === "x"){
                    count3++
                } else {
                    count4++
                }

            }
            
            if(matrix[k][j] === "x"){
                count5++
            }
            else {
                count6++
            }

        }

        if(count5 === matrix.length){
            console.log("x")
        } 
        else if (count6 === matrix.length){
            console.log("o")
        }

    }

    if(count1 === matrix.length || count3 === matrix.length){
        console.log("x")
    } else if(count2 === matrix.length || count4 === matrix.length){
        console.log("o")
    } 
    // if(count3 === matrix.length){
    //     console.log("x")
    // }
    // console.log(matrix.length)
    console.log(count1)
    console.log(count2)
    console.log(count3)
    console.log(count4)
    

    
}
runProgram(`o x x
o x x
x o o`)