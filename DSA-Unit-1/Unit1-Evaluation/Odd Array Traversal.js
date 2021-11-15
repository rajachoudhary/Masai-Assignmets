function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var arr = input[1].split(" ").map(Number)
    var output = []
    for(var i=0; i<N; i++){

        if(i%2 != 0){
            output.push(arr[i])
        }
    }
    console.log(output.join(" "))
}
runProgram(`5
1 2 3 4 5`)