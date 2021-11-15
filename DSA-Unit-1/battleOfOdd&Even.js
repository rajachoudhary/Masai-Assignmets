function runProgram(input){
input = input.split("\n")
var N = Number(input[0])
var n = input[1].split(" ").map(Number)
var odd = 0
var even = 0
for(var i=0; i<N; i++){

    if(n[i] % 2 === 0){
        even += n[i]
    } else {
        odd += n[i]
    }
}

if(even > odd){
    console.log("Even")
} else {
    console.log("Odd")
}

}
runProgram(`4
1 2 3 4`)