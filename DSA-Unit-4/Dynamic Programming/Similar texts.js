function similarText(arr1,arr2, N1,N2,twoDarr){

    if(N1===0 || N2 === 0){
        return 0
    }
    if(twoDarr[N1][N2] != -1){
        return twoDarr[N1][N2]
    }
    if(arr1[N1-1] === arr2[N2-1]){
        return twoDarr[N1][N2] = 1 +  similarText(arr1,arr2,N1-1,N2-1)
    } else {
        return twoDarr[N1][N2] =  max(similarText(arr1,arr2,N1,N2-1),similarText(arr1,arr2,N1-1,N2))
    }
}


function runProgrsm(input){
    input = input.split("\n")
    let arr1 = input[0]
    let N1 = arr1.length
    let arr2 = input[1]
    let N2 = arr2.length
    let twoDarr = []
    for(let i=0; i<=N1; i++){
        let arr = []
        for(let j=0; j<=N2; j++){
            arr.push(-1)
        }
        twoDarr.push(arr)
    }
   let output = similarText(arr1,arr2, N1,N2,twoDarr)
   console.log(output)
}
runProgrsm(`AEDFHR
ABCDGH`)