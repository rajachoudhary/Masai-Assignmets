function root(K){
    let low = 0;
    let high = K;
    let ans = 0;
    while(low <= high){
        let mid = parseInt(low + (high-low)/2)
    //    console.log(object)
        if(mid*mid === K){  
            ans = mid 
            break 
        } else if (mid*mid > K){
            high = mid-1
            
        } else {
            low = mid+1
            ans = mid
        }
    }
    return ans;
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