function MyArray(){
    
    Object.defineProperty(this,"length",{
        value:0,
        writable:true ,
        

    })
    
}
// PUSH
MyArray.prototype.push = function(value){
    
    this[this.length] = value;
    this.length++
    
}

var arr = new MyArray();
arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4)
arr.push(5)
arr.push(6)
console.log(arr,arr.length)


