function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var n = input[1].split(" ").map(Number)

    var min = n[0];
    var max = n[0]

    for(var i=0; i<N; i++){

        if(n[i] < min){
            min = n[i]
        }
        if(n[i] > max ){
            max = n[i]
        }
    }

    console.log(min)
    console.log(max)

}
runProgram(`11
55 -5 -8 2 0 9 4 5 6 9 1`)