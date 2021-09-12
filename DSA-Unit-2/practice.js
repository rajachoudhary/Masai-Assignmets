// function runProgram(input){

//     input = input.split("\n")
//     var twoDMatrix = []

//     for(var i=0; i< input.length; i++){

//         twoDMatrix.push(input[i].split(" ").map(Number))
//     }
//     console.log(twoDMatrix)

//     for(var j=0; j<twoDMatrix.length; j++){

//         for(var k=0; k<twoDMatrix[j].length; k++){

//             if(twoDMatrix[j][k] === 8){
//                 var x = j 
//                 var y = k
//                 var output = []
//                 while(x>0 && y>0){
//                     x--
//                     y--
//                 }
//                 while(x<twoDMatrix[j].length && y<twoDMatrix[k].length){

//                     output.push(twoDMatrix[x][y])
//                     x++
//                     y++
//                 }
//                 console.log(output.join(" "))
//             }
//         }
//     }

// }
// runProgram(`1 2 3
// 4 5 6
// 7 8 9`)



function runProgram(input){
    input = input.split(" ").map(Number)
    var obj = {}
    for(var i=0; i<input.length; i++){

        if(obj[input[i]]){
            obj[input[i]]++
        }
        else {
            obj[input[i]] = 1
        }
    }
    var max = 0

    for(value in obj){

        if(max < obj[value]){
            max = obj[value]
        }
        
        // console.log(value)
    }
    console.log(max)
}
runProgram(`1 2 4 4 4 3 2 5 5 3`)