function runProgram(input){
    input = input.split("\n")
    let N = Number(input[0])
    let line = 1
    for(var i=0; i<N; i++){
        let arr = input[line++]
        let arr1 = input[line++]
        // console.log(arr)
        let output = ""
        for(var j=0; j<arr.length;j++){
            
            for(var k=0; k<arr1.length; k++){

                if(arr[j] === arr1[k]){
                    output+=arr1[j]
                    break
                }
            }
            
        }
        if(output === arr1 ){
            console.log("True")
        } else {
            console.log("False")
        }
    }
}
runProgram(`2
abcd
dcab
aa
aaa`)