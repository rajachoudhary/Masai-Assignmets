function runProgram(input){
    input = input.split("\n")
    var N = Number(input[0])
    var arr = input[1].split(" ").map(Number)
    var index = ""
    var  divisibleBy7 = 0
    
    for(var i=0; i<N; i++){
        var sum = 0
        
        for(var j=0; j<N; j++){

            sum += arr[j]

        }
        sum = sum - arr[i]
        
        if(sum % 7 === 0){

            if(divisibleBy7 === 0){
                divisibleBy7 = sum
            }

            if(divisibleBy7 < sum){
                divisibleBy7 = sum
                index = i
            }
        
        }
    }

    if(index === ""){
        console.log(-1)
    } 
    else{
        console.log(index)
    }
    
    
}
runProgram(`100
18 794 259 404 945 483 884 155 214 279 965 830 941 249 491 353 459 40 293 749 783 21 619 68 650 321 939 230 767 786 78 604 776 864 740 721 615 32 4 501 6 643 150 676 152 955 598 582 402 967 143 254 675 769 340 458 707 867 666 206 565 733 175 810 925 972 675 449 684 854 854 901 39 853 618 527 456 525 685 850 47 770 133 521 263 944 264 906 669 858 265 724 827 432 641 654 73 538 687 324`)