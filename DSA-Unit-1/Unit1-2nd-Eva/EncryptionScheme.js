function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var arr = input[1].split(" ").map(Number)
    var sum =0
    for(var i=0; i<arr.length; i++){
        if(arr[i] === 1){
            sum += i+1
        
        }
       
    }
    console.log(sum )
}
runProgram(`5
0 1 0 1 0`)