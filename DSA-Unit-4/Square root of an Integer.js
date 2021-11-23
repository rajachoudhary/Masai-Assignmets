function root(K){
    let low = 1
    let high = K
    while(low <= high){
        let mid = low + (Math.floor(high-low)/2)
        console.log(mid)
        if(Math.round(mid*mid) === K){
            return mid
        } else if (Math.round(mid*mid) > K){
            high = mid-1
        } else {
            low = mid+1
        }
    }
}
function runProgram(input){
    input = input.split("\n").map(Number)
    let T = Number(input[0])
    let line = 1;
    for(var i=0; i<T; i++){
        let square = root(input[line++])
        console.log(square)
    }

}
runProgram(`1
624`)