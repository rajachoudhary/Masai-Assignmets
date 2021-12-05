function runProgram(input){
    
    input = input.trim(" ").split("\n")
    let T = Number(input[0])
    let line = 1
    
    for(var i=0; i<T; i++){
        
        let initialHeight = []
        let finalHeight = []

        let N = Number(input[line++])
        let X = Number(input[line++])
        let Y = Number(input[line++])
        
        for(var j=0; j<N; j++){
            
            let arr = input[line++].trim(" ").split(" ").map(Number)
            initialHeight.push(arr[0])
            finalHeight.push(arr[1])

        }
        
        initialHeight.sort((a,b)=>a-b)
        finalHeight.sort((a,b)=>a-b)
        
        let add = 0
        let remove = 0
        
        for(var k=0; k<N; k++){
    
            let result = finalHeight[k] -initialHeight[k] 
    
            if(result < 0){

                let convertToPositive = Math.abs(result)
                remove += convertToPositive

            } 
            else {

                add += result
            }
    
        }

        let output = add*X + remove*Y
        console.log(output)
    }

}
runProgram(`6
5
10
20
174094 882455
171152 761423
221685 761892
795431 233411
387427 793198
5
10
20
650286 248650
900613 893446
661849 637882
913598 407636
154209 737260
5
10
20
165754 120014
607177 773359
981826 603801
250947 835120
164061 898414
5
10
20
398808 778383
710734 965109
968348 499255
333743 808806
819897 228289
5
10
20
781586 124258
626539 246182
119762 952003
918195 325258
677229 419698
5
10
20
255491 250839
396799 769357
665825 441616
335532 825361
862146 291503`)