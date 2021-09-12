var input = [2,4,5,3,6,8]

var even = input.filter(function (el,i) {
    
    if(i%2===0){

        if(el%2===0){

            return el;
        }
    }

})
console.log(even)
