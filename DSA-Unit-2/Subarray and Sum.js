function runProgram(input){
    input = input.split("\n")
    var nk = input[0].split(" ").map(Number)
    var N = nk[0]
    var K = nk[1]
    var arr = input[1].split(" ").map(Number)
    
    var left = 0
    var right = arr.length-1
    while(left<right){
        var len= []
        var sum = arr[left]+arr[right]
        len.push(arr)

    }
}
// console.log(6%3)
runProgram(`4 3
2 3 4 6`)
