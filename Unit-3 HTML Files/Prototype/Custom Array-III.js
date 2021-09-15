function MyArray(){

    Object.defineProperty(this,"length",{
        value : 0,
        writable : true,
    })
   
}

MyArray.prototype.push = function(value){
    this[this.length] = value
    this.length++
}

MyArray.prototype.reverse = function(value){
    var reverse = []
    for(var i=this.length-1; i>=0; i--){
        reverse.push(value[i])
        
    }
   console.log(reverse)
}


var arr = new MyArray()
arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4)
arr.push(5)
arr.push(6)

var re = arr.reverse(arr)
console.log(arr,arr.length)
console.log(arr[0])
