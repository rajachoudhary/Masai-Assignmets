function compare(str1,str2){
    for(var i=0;i<str1.length;i++){
        if(str1[i]>str2[i]){
            //swap
           return 1
        }
        else if(str1[i]<str2[i]){
            //no swap
            return 0
        } 
    }
}
function processData(input) {
    input=input.split('\n')
    var n=input.shift()
    // console.log(input)
    var arr=[]
    for(var i=0;i<n;i++){
        arr[i]=input[i].split(' ')
        // console.log(arr)
    }
   for(var i=0;i<n-1;i++){
        for(var j=0;j<n-i-1;j++){
            if(arr[j][1]<arr[j+1][1]){
                var temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
            else if(arr[j][1]==arr[j+1][1]){
                str1=arr[j][0]
                str2=arr[j+1][0]
                var swapneeded=compare(str1,str2)
                if(swapneeded==1){
                var temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                }
            }
        }
    }
    var i=0
   console.log(arr)
 var current_num =arr[0][1]
    for(var j=0;j<arr.length;j++){
        //current_index=i
        if(arr[j][1]==current_num){
            console.log((i+1)+" "+arr[j][0])
        }
        else{
            current_num=arr[j][1]
            i=j
            console.log((j+1)+" "+arr[j][0])
        }
    }
}
processData(`6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45`)
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });
// process.stdin.on("end", function () {
//    processData(_input);
// });