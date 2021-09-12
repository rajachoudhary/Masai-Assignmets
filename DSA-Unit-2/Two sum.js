function runProgram(input){
    input = input.split("\n")
    var T = Number(input[0])
    var line = 1 

    for(var i=0; i<T; i++){
        var nk = input[line++].trim().split(" ").map(Number) 
        var arr = input[line++].trim().split(" ").map(Number) 
        
        var N = nk[0]
        var k = nk[1]
        
        var array = arr.sort(function(a,z){return(a - z)})
       
        var left = 0
        var right = array.length - 1
        var count = 0
        while(left<right){

            var sum = array[left]+array[right]

            if(sum === k){
                count++
               console.log(left+ " "+ right)
               break;
            } else if(sum<k){
                left++
            } else {
                right--
            }
        }
        if(count === 0){
           console.log("-1" + " " + "-1")
        }
       
    }

}
runProgram(`3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`)