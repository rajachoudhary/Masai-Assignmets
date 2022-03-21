function runProgram(input){
    input = input.split("\n").map(Number)
    var  T= input[0]
    for(var i=1; i<=T; i++){

      
      var N = Number(input[i])
      let candies = 0;
        candies+= N;
        while(N>9)
        {
            let oneByTenth = Math.floor(N/10);
            candies += oneByTenth;
            let oneTenth2 = N%10;
            N = oneByTenth+ oneTenth2;
        }
        console.log(candies);

    
    }
}
runProgram(`6
1
10
19
9876
12345
1000000000`)
// console.log((45/10))
