function permutation(arr1,arr2){
    let count = 0
    for(let i=0; i<arr1.length; i++){

        for(let j=0; j<arr2.length; j++){

            if(arr1[i] === arr2[j]){
                count++
                break;
            }
        }
    }
    if(count === arr1.length){
        console.log("Yes")
    }else {
        console.log("No")
    }
    
}


function runProgram(input){
    input = input.split("\n")
    let arr1 = input[0].split("")
    let arr2 = input[1].split("")
    let output = permutation(arr1,arr2)
}
runProgram(`gggggjjjj
jjjjggggg`)