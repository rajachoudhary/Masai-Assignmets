function runProgram(input){
    let strLength= 1
    for(let i=0; i<input.length; i++){
        let str = ""
        
        for(let j=i; j<input.length; j++){

            str += input[j]
            let palindrome = ""
            // console.log(str)

            for(let k=str.length-1; k>=0; k--){

                palindrome += str[k]
                
            }
            
            if(palindrome === str){

                if(palindrome.length > strLength){
                    strLength= palindrome.length
                }
                
            }
            
            console.log(str )
        }
    }
}
runProgram(`AABCDEBAZ`)