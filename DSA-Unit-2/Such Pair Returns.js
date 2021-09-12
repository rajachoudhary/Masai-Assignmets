function runProgram(input){

    input = input.split("\n")
    var T = Number(input[0])
    var line = 1 

    for(var i=0; i<T; i++){
        var nk = input[line++].trim().split(" ").map(Number) 
        var arr = input[line++].trim().split(" ").map(Number) 
        
        var N = nk[0]
        var k = nk[1]
        
        var array = arr.sort(function(a, z) { return a - z})
        
        var left = 0
        var right = array.length - 1
        var count = 0
        while(left < right){

            var sum = array[left]+array[right]
            if(sum === k){
                
                console.log("1")
                count++
                break;
            } else if(sum>k){
                right--
            } else {
                left++
            }
          
        }
       
        if(count ===  0){

            console.log("-1")
        }
       
    }
    
}

runProgram(`10
6 16
2 0 2 5 -3 0
9 3
6 -6 -7 8 -4 8 -6 1 4
1 -1
1
3 -3
-2 3 0
5 -9
4 5 0 -3 3
7 4
1 2 1 6 -2 7 0
7 -10
2 -5 6 -1 5 -1 6
4 -12
1 -2 -3 -4
6 0
5 -6 5 5 3 0
2 3
-2 -2`)