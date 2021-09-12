

function totalTax(sortingArr,N){
    
    var sum = 0
    for(var i=N; i<sortingArr.length;i++){
        sum += sortingArr[i]
    }
    
    return sum;
    
}

function runProgram(input){
    input = input.trim().split("\n")
    var N = Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
    var sortingArr =arr.sort(function (a, b) { 
        // console.log(a,b)
        return a - b 

    }); 
    // var number = sortingArr.trim().split(" ").map(Number)
    var tax = totalTax(sortingArr,N)
    console.log(tax)
    // console.log(N)
}
runProgram(`5
1 3 1 2 4 7 3 8 2 5`)