function runProgram(input){
    input = input.split("\n")
    var teamA = 0
    var teamB = 0
    var team1 = input[1]
    var team2 = ""
    for(var i=1; i<input.length; i++){

        if(input[i] != input[input[i+1]]){
            team2 = input[i+1]
        }

        if(input[i] === input[1]){
            teamA++
        } else {
            teamB++
        }
            
            
        
    }
    
    if(teamA > teamB){
        console.log(team1)
    } else {
        console.log(team2)
    }
}
runProgram(`5
PKUZYTFYWN
PKUZYTFYWN
STC
PKUZYTFYWN
PKUZYTFYWN`)