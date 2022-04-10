function runProgram(input){
     input = input.split("")
     let output = 0
    //  console.log(input)
     for(let i=0; i<input.length; i++){
            let subString = []
        for (let j = i; j < input.length; j++) {
            subString.push(input[j])
            let o = 0
            let i=  0
            let a =0
            let u=0
            for (let k = 0; k < subString.length; k++) {
                
                if(subString[k] === "o" ){
                   o++
                } else if(subString[k] === "a" ){
                    a++
                } else if (subString[k] === "i" ){
                    i++
                } else if( subString[k] === "u"){
                    u++
                }
                
            }
            if(o>=1 && a>=1 && i>=1 && u>= 1){
                output++
            }
            
        }

     }
     console.log(output)
}
runProgram(`dangerouscovid`)