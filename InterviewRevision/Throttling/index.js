let makeApiCall = () =>{
    console.log('Raja')
}

function throttler(func,delay){
    let lastCall = 0
    return function (){
        console.log(Date.now(cd))
        if(Date.now()-lastCall > delay){
            lastCall = Date.now()
            func.apply(this,arguments)
        }
    }
}
window.addEventListener("load",function(){
    let btn = document.getElementById("clickMe")
    btn.addEventListener("click",throttler(makeApiCall,1000))
})