function runProgram(input){
    input = input.split("\n")
    var n = Number(input[0])
    var twoDMatrix = []
 
    for(var i=1; i<=n; i++){

        twoDMatrix.push(input[i].split(" ").map(Number))
    }
    console.log(input)

    var output = []

    var top = 0
    var left = 0
    var bottom = n-1
    var right = n-1
    var size = n*n
    var count = 0
    var arr = []
    while(count<size){

        for(var i=top; i<=right; i++){
            arr.push(twoDMatrix[top][i])
            count++
            // arr.push(i)/
        }
        top++
        
        for(var j=top; j<=right; j++){
            arr.push(twoDMatrix[j][right])
            count++
        }
        right--

        for(var k=right; k>=left; k--){
            arr.push(twoDMatrix[bottom][k])
            count++
            // arr.push(k)
        }
        bottom--

        for(var l=bottom; l>=top; l--){
            arr.push(twoDMatrix[l][left])
            count++
            // console.log(l)
        }
        left++
    }
    // console.log(arr.join(" "))
    
}
runProgram(`5
1 2 3 4 5
5 6 7 8 6
1 2 3 4 7
5 6 7 8 8
1 2 3 4 5`)