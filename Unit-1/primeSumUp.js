function runProgram(input){
  input = Number(input)
  var sum = 0;
  for(var i = 2; i <= input; i++){
    var count = 1
    for(j = 2; j <= i; j++){
        if(i % j === 0){
            count++
        }
        if(count > 2){
            break;
        }
        
    }
    if(count === 2 || i === 2){
        sum += i
    }
  }
  console.log(sum)
     
 }
 runProgram(`13`)