function peak(N,arr){
    let output = 0
    for(var i=0; i<N-1; i++){
        if(arr.length === 1){
            output = arr[i]
        } else {
            for(var j=i+1; j<N; j++){
                if(arr[i]<arr[j]){
                    
                }
            }
        }
    }

}
function runProgramn(input){
    input = input.split("\n")
    let T = Number(input[0])
    let line = 1
    for(var i=0; i<T; i++){
        let N = Number(input[line++])
        let arr = input[line++].split(" ").map(Number)
        peak(N,arr) 
        
    }
}
runProgramn(`3
1
4
2
2 2
4
1 2 1 2`)

