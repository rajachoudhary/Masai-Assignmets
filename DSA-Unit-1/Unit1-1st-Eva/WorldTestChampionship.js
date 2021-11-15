function runProgram(input){
    input = input.split("\n")
    var indScores = Number(input[0])
    var ausScores = Number(input[1])
    var indMatches = Number(input[2])
    var ausMatches = Number(input[3])
    
    
    if(indScores > ausScores){
        console.log("India")
    } 
    
    else if (indMatches === ausMatches && ausScores === indScores){
        console.log("Play another game!")
    } 

    else if (indScores === ausScores){

        if(indMatches > ausMatches){
            console.log("Australia")
        } else {
            console.log("India")
        }
    }

    else{
        console.log("Australia")
    }
}
runProgram(`500
500
10 
12`)