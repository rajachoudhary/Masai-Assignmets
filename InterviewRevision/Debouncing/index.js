let makeApiCall = () =>{
    console.log('Raja')
}

let debouncing = (func,delay) =>{
    let debounce ;
    return function (){
        debounce && clearTimeout(debounce)
        debounce = setTimeout(()=>func(),delay)
    }
}
window.addEventListener("load",function(){
    let btn = document.getElementById("clickMe")
    btn.addEventListener("click",debouncing(makeApiCall,1000))
})