function runProgram(input){
    input = input.split(" ").map(Number)
    var n = Number(input[0])
    var m = Number(input[1])
    var count = 0
    for(var i=0; i<=n+m; i++){

        for(var j=0; j<=n+m; j++){

            if(i**2 + j === n && j**2 + i === m){
                count++
            }
        }
    }
    console.log(count)

}
runProgram(`9 3`)