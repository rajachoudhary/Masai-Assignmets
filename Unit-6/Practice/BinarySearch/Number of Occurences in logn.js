function runProgram(input){
    input = input.split("\n")
    let nKey = input[0].split(" ").map(Number)
    let N= nKey[0]
    let K= nKey[1]
    let arr = input[1].split(" ").map(Number)

    let low = 0;
    let high = N-1
    let output = 0
   
    while (low<=high) {
        let mid =  low + Math.floor((high-low)/2)
        if(arr[mid] === K){
            output++
            high = mid-1
            
        } else if (K>arr[mid]){
            low = mid+1
        } else {
            high = mid-1
        }
    }
    console.log(output)

}
runProgram(`9 2
0 1 2 2 2 3 4 5 7`)