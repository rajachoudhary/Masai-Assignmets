function minimumElement(N,arr){
    let low = 0;
    let high = N-1;
    let ans = arr[0];
    
    while(low <= high){
        let mid =  Math.floor((low+(high-low)/2))
        if(arr[mid] < arr[mid-1]){
            ans =  arr[mid]
            break;
        }
        else if (arr[mid] > arr[mid+1]){
            ans =  arr[mid+1]
            break;
        } 
        else if (arr[low] <= arr[mid]){
            low = mid +1 
        } 
        else {
            high = mid-1
        }   
    }
    
    return ans;
}

function runProgram(input){
    input = input.split("\n")
    let N = Number(input[0])
    let arr = input[1].split(" ").map(Number)
    let output = minimumElement(N,arr)
    console.log(output)
}
runProgram(`10
4 6 7 -5 10 1 0 1 2 3`)