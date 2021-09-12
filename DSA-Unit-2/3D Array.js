function runProgram(input){
    input = input.split("\n")
    var NMK = input[0].split(" ").map(Number)
    var N = NMK[0]
    var M = NMK[1]
    var K = NMK[2]
    var arr = input[1].split(" ").map(Number)
    var layer =(arr.length)/N
    // console.log(layer)
    // var threeDMatrix = []
    
    var twoD = []
    for(var i=0; i<arr.length; i++){
         
        var matrix = arr.slice(i,i+(M*K))
        i=i+(M*K)-1
        twoD.push(matrix)
        // threeDMatrix.push(twoD)
      
    }
    // console.log(twoD)
    var threeDMatrix = []
    for(var m=0; m<twoD.length; m++){
        var shift = []
        for(var n=0; n<M*K; n++){

            var slic = twoD[m].slice(n,n+K)
            n = n+K-1
            shift.push(slic)
        }
        threeDMatrix.push(shift)
        // console.log(shift)
    }
    // console.log(threeDMatrix)
   
    for(var j=0; j<N; j++){
        
        for(var k=0; k<M; k++){
            var output = []
            // console.log(threeDMatrix[j][k])
            for(var l=0; l<K; l++){
                output.push(threeDMatrix[j][k][l])
                // console.log(j,k,l)
            }
            console.log(output.join(" "))
        }
    }
   
    
}
runProgram(`2 2 2
1 2 3 4 5 6 7 8`)