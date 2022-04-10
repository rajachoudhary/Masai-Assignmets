/**
 *  find the floor value of given K
 * floor means whichever element is present in the given array that element must be  greather than or equal to (<=)  the given K and 
 * whichever element is greather than or equal to (<=) in all the element smaller element will be the output  
 * 
 */

 function runProgram(input){
    input = input.split("\n")
    let nKey = input[0].split(" ").map(Number)
    let N= nKey[0]
    let K= nKey[1]
    let arr = input[1].split(" ").map(Number)

    let low = 0;
    let high = N-1
    let output = 0
//    console.log(N,K,arr)
    while (low<=high) {
        let mid =  low + Math.floor((high-low)/2)
         if (K>arr[mid]){
            low = mid+1
            
        } else {
            high = mid-1
            if(output < arr[mid]){
                output = arr[mid]
            }
        }
    }
    console.log(output)

}
runProgram(`9 41
0 1 2 3 8 10 12 43 52 71`)