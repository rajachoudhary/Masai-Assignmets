function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var height = input[1].split(" ").map(Number)
    
    var array = []
   for(var i=0; i<N; i++){

    if(height[i] > height[i+1]){
        array.push(height[i])
    }
   }
   var count = 1
   for(var j=0; j<array.length; j++){
       count++
   }
   console.log(count)
}
runProgram(`21
958190 957454 941895 911430 904788 771190 701651 628634 595867 546822 530374 516913 471754 426041 414093 344705 237398 184902 145150 128457 113124`)