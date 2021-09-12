function runProgram(input){
    var input=input.split("\n")
    var T = Number(input[0])
    var line = 1
    for(var i=0; i<T; i++){
        var N = Number(input[line++])
        var arr = input[line++].split(" ").map(Number)
        arr = arr.sort(function(a,z){return a - z})
        // console.log(arr)
        var K = Number(input[line++])
        
        var left = 0
        var right = arr.length-1
        var lessThanK = 0
        while(left<right){

            sum = arr[left]+arr[right]
            
             if (sum < K){
                left++
                if(sum > lessThanK){
                    lessThanK = sum
                }

            }
            else {
                right--
            }
        }
        
        if(lessThanK === 0){
            console.log("-1")
        } else {
            console.log(lessThanK)
        }
    }
}
runProgram(`2
5
1 2 3 4 5
7
3
30 10 20
15`)  