function sortingArray(arr,k){
    var sortArray = []
    for(var i=0; i<arr.length; i++){
        
        if(arr[i] > k){
            sortArray.push(arr[i])
        }
    }
    return sortArray
}


function runProgram(input){
    input = input.split("\n")
    var n = Number(input[0])
    var arr = input[1].split(" ").map(Number)
    var q = Number(input[2])
    
    for(var i=1; i<=q; i++){
        var k = Number(input[i+2])

        
        var sort = sortingArray(arr ,k)
        console.log(sort)
    }
    // console.log(q)
}
runProgram(`10
13 89 81 66 81 63 71 76 73 81
2
65
15`)