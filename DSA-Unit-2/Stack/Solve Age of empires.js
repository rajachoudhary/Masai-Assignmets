function runProgram(input){
    input = input.trim().split("\n")
    var N = Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
    arr.sort(function(a,z){
        return a-z
    })
    var sum = 0
    for(var i=0; i<arr.length; i++){

        if(arr[i]<=arr[i+1]){
            sum+=arr[i]
            i=i+1
        } else {
            sum += arr[i+1]
            i=i+1
        }

    }
    console.log(sum)
  
}
runProgram(`2
1 3 1 2`)