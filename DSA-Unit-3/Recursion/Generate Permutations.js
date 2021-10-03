function swap (S,i,C){
    var p = S.split("")
    var temp = p[i]
    p[i] = p[C]
    p[C] = temp
    return p.join("")    
}

function permute(S,C,R){
    
    if(R===C){
        console.log(S)
    } else{

        for(let i=C; i<=R; i++){

           S = swap(S,i,C)
            permute(S,C+1,R)
        }
    }
}

function runProgram(input){
    input = input.split("\n")
    var N = input[0]
    var S = input[1].split(" ").join("")
    permute(S,0,N-1)
}
runProgram(`3
1 2 3`)