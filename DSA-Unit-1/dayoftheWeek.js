function runProgram(input){
    input = input.split("\n")
    var day = input[0]
    var N = Number(input[1])
    var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    var index = week.indexOf(day) + N
    var afterNDays = ""
    var remainingDays = Math.floor(index%7)
    console.log(remainingDays)

    if(N <= 7){
        for(var i=0; i<N; i++){
            afterNDays = week[i]
        }
        console.log(afterNDays)
    }
    else{
        for(var i=0; i<=remainingDays; i++){
        
            afterNDays = week[i]
        }
        console.log(afterNDays)
    }
    
}
runProgram(`Monday
8`)