function runProgram(input){
    input = input.split("\n")
    let N = input[0]
    let vowels = ["a","e","i","o","u"]
    for (var i=1; i<=N; i++){
        let word = input[i].split("")
        // console.log(word)
        let arr = []
        let arr1 = []
        for(var j=0; j<word.length; j++){
        
            for(var k = 0; k<vowels.length; k++){
                
                if(vowels[k] === word[j]){
                    arr.push(word[j])
                    break
                } 
            } 
        }
        for(var l=0; l<word.length; l++){
           let count = 0
            for(var m = 0; m<vowels.length; m++){
                
                if(vowels[m] === word[l]){
                   count++ 
                   break
                } 
            } 
            if(count == 0){
                arr.push(word[l])
            }
        }
        console.log(arr.join(""))
       
    }
}
runProgram(`4
eio
masaischool
ubcdefghioel
rhythm`)