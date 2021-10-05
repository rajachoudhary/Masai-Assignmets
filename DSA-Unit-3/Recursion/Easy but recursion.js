function sum (arr,N) {
    if(N < 0){
        return 0
    }
    else {
        return arr[N] + sum(arr,N-1)
    }
}

function runProgram(input){
    input = input.split("\n")
    var T = Number(input[0])
    var line = 1;

    for(var i=0; i<T; i++){
        var N = Number(input[line++])
        var arr = input[line++].split(" ").map(Number)
        console.log(sum(arr,N-1))
    }
}
runProgram(`3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9`)