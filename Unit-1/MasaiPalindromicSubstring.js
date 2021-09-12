function runProgram(input){
    var strLength= 1
    for(var i=0; i<input.length; i++){
        var str = ""
        
        for(var j=i; j<input.length; j++){

            str += input[j]
            var palindrome = ""
            // console.log(str)

            for(var k=str.length-1; k>=0; k--){

                palindrome += str[k]
                
            }
            
            if(palindrome === str){

                if(palindrome.length > strLength){
                    strLength= palindrome.length
                }
                
            }
            
        }
    }
    console.log(strLength)
}
runProgram(`thisracecarisgood`)